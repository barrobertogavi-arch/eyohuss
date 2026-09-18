import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { artCatalog } from '@/lib/data';

export default function ArtPage() {
  return (
    <main className="space-y-8 pb-20 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Art global catalogue</p>
          <h1 className="text-3xl font-black">Curated galleries</h1>
        </div>
        <Button variant="secondary">Filters</Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {artCatalog.map((art) => (
          <Card key={art.id} className="overflow-hidden border-border/80 p-0">
            <div className="relative h-72 w-full">
              <Image src={art.image} alt={art.title} fill className="object-cover" />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="font-semibold">{art.title}</h3>
              <p className="text-sm text-muted-foreground">{art.origin}</p>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
