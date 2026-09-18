"use client";

import { useWebRTCStream } from "@/hooks/use-web-rtc-stream";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export function StreamPlayer({ title }: { title: string }) {
  const { videoRef, status, startStream } = useWebRTCStream();

  return (
    <Card className="overflow-hidden border-border/80">
      <div className="relative h-64 w-full bg-slate-950">
        <video ref={videoRef} className="h-full w-full object-cover" controls playsInline muted />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{status}</span>
        </div>
        <Button onClick={startStream} className="w-full gap-2">
          <Play className="h-4 w-4" />
          {status === "connected" ? "Resume WebRTC stream" : "Open WebRTC stream"}
        </Button>
      </div>
    </Card>
  );
}
