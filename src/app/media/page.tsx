import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { movieCatalog } from '@/lib/data';

export default function MediaPage() {
  return (
    <main className="space-y-8 pb-20 md:pb-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cinematheque</p>
          <h1 className="text-3xl font-black">Movies & music</h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', 'Action', 'Drama', 'Sci-Fi', 'Documentary', 'Indie', 'Music'].map((filter) => (
            <Button key={filter} variant={filter === 'All' ? 'default' : 'secondary'} size="sm">
              {filter}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {movieCatalog.map((movie) => (
          <Card key={movie.id} className="overflow-hidden border-border/80">
            <div className="relative h-72 w-full">
              <Image src={movie.image} alt={movie.title} fill className="object-cover" />
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{movie.genre}</Badge>
                <span className="text-xs text-muted-foreground">{movie.quality}</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-muted-foreground">{movie.meta}</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>{movie.year}</span>
                <span>{movie.duration}</span>
              </div>
              <Button asChild className="w-full">
                <Link href={`/media/${movie.id}`}>Open details</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
