import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download, Play } from 'lucide-react';
import { notFound } from 'next/navigation';
import { movieCatalog } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useWebRTCStream } from '@/hooks/use-web-rtc-stream';

export default async function MediaDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = movieCatalog.find((item) => item.id === id);

  if (!movie) {
    notFound();
  }

  return (
    <main className="space-y-8 pb-20 md:pb-8">
      <Link href="/media" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to catalog
      </Link>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden border-border/80">
          <div className="relative h-[420px] w-full">
            <Image src={movie.image} alt={movie.title} fill className="object-cover" priority />
          </div>
          <div className="space-y-4 p-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{movie.genre}</Badge>
              <Badge variant="outline">{movie.quality}</Badge>
              <Badge variant="outline">{movie.year}</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <WatchStreamButton />
              <Button variant="secondary" className="gap-2">
                <Download className="h-4 w-4" /> Optimized Download
              </Button>
            </div>
            <p className="text-muted-foreground">{movie.description}</p>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Synopsis</p>
            <h1 className="mt-4 text-3xl font-black">{movie.title}</h1>
            <p className="mt-3 text-muted-foreground">{movie.synopsis}</p>
          </Card>

          <Card className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Runtime</p>
                <p className="mt-2 font-semibold">{movie.duration}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Rating</p>
                <p className="mt-2 font-semibold">{movie.rating}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Director</p>
                <p className="mt-2 font-semibold">{movie.director}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Language</p>
                <p className="mt-2 font-semibold">English</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

function WatchStreamButton() {
  const { videoRef, status, startStream } = useWebRTCStream();

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-border bg-slate-950">
        <video ref={videoRef} className="h-52 w-full object-cover" controls playsInline muted />
      </div>
      <Button onClick={startStream} className="w-full gap-2">
        <Play className="h-4 w-4" /> {status === 'connected' ? 'Resume stream' : 'WebRTC Stream'}
      </Button>
    </div>
  );
}
