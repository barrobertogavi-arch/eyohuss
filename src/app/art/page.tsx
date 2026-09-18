import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { literatureCatalog } from '@/lib/data';

export default function LiteraturePage() {
  return (
    <main className="space-y-8 pb-20 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Literature</p>
          <h1 className="text-3xl font-black">Biographies, ebooks & manuscripts</h1>
        </div>
        <Button variant="secondary">Browse library</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {literatureCatalog.map((book) => (
          <Card key={book.id} className="overflow-hidden border-border/80">
            <div className="relative h-72 w-full">
              <Image src={book.image} alt={book.title} fill className="object-cover" />
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center gap-2">
                <Badge>{book.genre}</Badge>
                <Badge variant="outline">{book.year}</Badge>
              </div>
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-sm text-muted-foreground">{book.author}</p>
              <Button className="w-full">Open edition</Button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
