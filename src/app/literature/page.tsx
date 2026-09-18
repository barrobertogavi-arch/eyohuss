import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { newsCatalog } from '@/lib/data';

export default function NewsPage() {
  return (
    <main className="space-y-8 pb-20 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Editorial</p>
          <h1 className="text-3xl font-black">Global news & opinion</h1>
        </div>
        <Button variant="secondary">Broadcast feed</Button>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="overflow-hidden border-border/80">
          <div className="relative h-80 w-full">
            <Image src={newsCatalog[0].image} alt={newsCatalog[0].title} fill className="object-cover" />
          </div>
          <div className="space-y-3 p-5">
            <Badge>{newsCatalog[0].category}</Badge>
            <h2 className="text-2xl font-bold">{newsCatalog[0].title}</h2>
            <p className="text-muted-foreground">{newsCatalog[0].excerpt}</p>
          </div>
        </Card>

        <div className="space-y-4">
          {newsCatalog.slice(1).map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex gap-3">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.category}</p>
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
