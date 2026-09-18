import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { marketCatalog } from '@/lib/data';

export default function MarketPage() {
  return (
    <main className="space-y-8 pb-20 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Affiliate marketplace</p>
          <h1 className="text-3xl font-black">Curated commerce</h1>
        </div>
        <Button variant="secondary">Filter marketplace</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {marketCatalog.map((item) => (
          <Card key={item.id} className="overflow-hidden border-border/80">
            <div className="relative h-52 w-full">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <Badge>{item.category}</Badge>
                <span className="text-xs text-emerald-500">{item.commission}% aff</span>
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${item.price}</span>
                <Button variant="secondary">Add to cart</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
