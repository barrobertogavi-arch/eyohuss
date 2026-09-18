"use client";

import { useEffect, useRef, useState } from "react";

export function useWebRTCStream() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const [status, setStatus] = useState<"idle" | "connecting" | "connected" | "error">("idle");

  useEffect(() => {
    return () => {
      socketRef.current?.close();
      peerConnectionRef.current?.close();
    };
  }, []);

  const startStream = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("error");
      return;
    }

    try {
      setStatus("connecting");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: true,
      });

      const connection = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });
      peerConnectionRef.current = connection;

      stream.getTracks().forEach((track) => connection.addTrack(track, stream));

      connection.ontrack = (event) => {
        if (videoRef.current) {
          videoRef.current.srcObject = event.streams[0];
        }
      };

      connection.onconnectionstatechange = () => {
        if (connection.connectionState === "connected") setStatus("connected");
        if (["failed", "closed", "disconnected"].includes(connection.connectionState)) setStatus("error");
      };

      connection.onicecandidate = (event) => {
        if (event.candidate && socketRef.current?.readyState === WebSocket.OPEN) {
          socketRef.current.send(JSON.stringify({ type: "ice", candidate: event.candidate }));
        }
      };

      const socketUrl = process.env.NEXT_PUBLIC_SIGNALING_URL ?? "ws://localhost:8787";
      const socket = new WebSocket(socketUrl);
      socketRef.current = socket;

      socket.onopen = async () => {
        const offer = await connection.createOffer();
        await connection.setLocalDescription(offer);
        socket.send(JSON.stringify({ type: "offer", sdp: offer.sdp }));
      };

      socket.onmessage = async (event) => {
        const message = JSON.parse(event.data);
        if (message.type === "answer" && connection.remoteDescription == null) {
          await connection.setRemoteDescription({ type: "answer", sdp: message.sdp } as RTCSessionDescriptionInit);
          setStatus("connected");
          return;
        }

        if (message.type === "ice" && message.candidate) {
          await connection.addIceCandidate(new RTCIceCandidate(message.candidate));
        }
      };

      socket.onerror = () => setStatus("error");
    } catch (error) {
      console.error("WebRTC stream initialization failed", error);
      setStatus("error");
    }
  };

  return { videoRef, status, startStream };
}
