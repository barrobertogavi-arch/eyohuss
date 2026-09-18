const { WebSocketServer } = require("ws");

const server = new WebSocketServer({ port: 8787 });

const peers = new Map();

server.on("connection", (socket) => {
  const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  peers.set(id, socket);

  socket.on("message", (raw) => {
    let payload;

    try {
      payload = JSON.parse(raw.toString());
    } catch {
      return;
    }

    if (!payload || typeof payload !== "object") {
      return;
    }

    const { type, target, ...message } = payload;

    if (type === "join") {
      socket.send(JSON.stringify({ type: "joined", peerId: id }));
      return;
    }

    if (!target) {
      return;
    }

    const targetSocket = [...peers.entries()].find(([peerId]) => peerId === target)?.[1];

    if (targetSocket && targetSocket.readyState === targetSocket.OPEN) {
      targetSocket.send(JSON.stringify({ ...message, type, from: id }));
    }
  });

  socket.on("close", () => {
    peers.delete(id);
  });
});

console.log("EYOHUSS signaling server listening on ws://localhost:8787");
