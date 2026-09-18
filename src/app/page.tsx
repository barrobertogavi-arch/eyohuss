import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { $featureCards, $feedItems, $heroStatCards } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <main className="space-y-8 pb-20 md:pb-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-violet-600/20 via-background to-background p-5 shadow-lg md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.3),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.25),transparent_35%)]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            <Badge variant="outline">Live global ecosystem</Badge>
            <div className="space-y-3">
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">EYOHUSS</h1>
              <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                One premium super-app for streaming, literature, art, football intelligence,
                social-first media, and next-generation commerce.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/media">Explore media</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/wallet">Open wallet</Link>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {$heroStatCards.map((item) => (
                <Card key={item.label} className="p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-2xl font-bold">{item.value}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border-white/10 bg-slate-950 text-white">
            <div className="relative h-72 w-full">
              <Image
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
                alt="EYOHUSS feature showcase"
                fill
                className="object-cover opacity-80"
                priority
              />
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase text-violet-300">Now streaming</p>
                  <h2 className="text-xl font-semibold">Midnight Signal</h2>
                </div>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                +18.3% engagement from the affiliate network
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">For you</h2>
          <Link href="/media" className="text-sm text-primary hover:underline">Open all media</Link>
        </div>

        <Suspense fallback={<div className="h-64 animate-pulse rounded-2xl bg-muted" />}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {$featureCards.map((item) => (
              <Card key={item.id} className="overflow-hidden border-border/80">
                <div className="relative h-40 w-full">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between text-xs uppercase text-muted-foreground">
                    <span>{item.category}</span>
                    <span>{item.rating}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    View feature <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Suspense>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Live feed</h3>
            <Badge className="bg-emerald-500/10 text-emerald-400">Updated 12s ago</Badge>
          </div>
          <div className="space-y-4">
            {$feedItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4 rounded-2xl border border-border p-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                  <h4 className="line-clamp-2 font-medium">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="mb-4 text-xl font-semibold">Market pulse</h3>
          <div className="space-y-4">
            {[
              { label: "Affiliate ROI", value: "+28.6%" },
              { label: "Active creators", value: "9,482" },
              { label: "Global art sales", value: "$248K" },
              { label: "Wallet inflows", value: "$1.4M" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-border bg-muted/50 p-3">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className="font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
