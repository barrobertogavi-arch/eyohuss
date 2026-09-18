"use client";

import { useOptimistic } from "react";
import { createSMMOrder } from "@/actions/smm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowUpRight, ChartColumnBig, CreditCard, Users } from "lucide-react";

const chartData = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 160 },
  { name: "Mar", value: 150 },
  { name: "Apr", value: 220 },
  { name: "May", value: 240 },
  { name: "Jun", value: 300 },
  { name: "Jul", value: 330 },
];

const initialOrders = [
  { id: "s1", service: "Algorithmic 10K followers", quantity: 10000, total: 189, status: "complete", createdAt: "2026-09-16T10:00:00Z" },
  { id: "s2", service: "Boost reel reach", quantity: 25000, total: 310.75, status: "processing", createdAt: "2026-09-17T08:30:00Z" },
];

export default function SMMPage() {
  const [wallet, optimisticWalletUpdate] = useOptimistic(1248.5, (current, delta: number) => current - delta);
  const [orders, optimisticAddOrder] = useOptimistic(initialOrders, (current, nextOrder: { id: string; service: string; quantity: number; total: number; status: "queued" | "processing" | "complete"; createdAt: string }) => [nextOrder, ...current]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const service = String(formData.get("service") ?? "");
    const quantity = Number(formData.get("quantity") ?? 0);
    const unitPrice = Number(formData.get("unitPrice") ?? 0);
    const total = quantity * unitPrice;

    const newOrder = {
      id: `smm-${Date.now()}`,
      service,
      quantity,
      total,
      status: "queued" as const,
      createdAt: new Date().toISOString(),
    };

    optimisticWalletUpdate(total);
    optimisticAddOrder(newOrder);

    await createSMMOrder(formData);
    event.currentTarget.reset();
  }

  return (
    <main className="space-y-6 pb-20 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">SMM panel</p>
          <h1 className="text-3xl font-black">Reseller dashboard</h1>
        </div>
        <Button variant="secondary" className="gap-2">
          <ChartColumnBig className="h-4 w-4" /> Global filter
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Gross revenue", value: "$284.9K", icon: CreditCard },
          { label: "Active bundles", value: "1,342", icon: Users },
          { label: "Processor uptime", value: "99.98%", icon: ArrowUpRight },
          { label: "Auto approvals", value: "4.8s avg", icon: ChartColumnBig },
        ].map((stat) => (
          <Card key={stat.label} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
                <p className="mt-3 text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-2 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Campaign velocity</h2>
            <Badge variant="outline">30d trend</Badge>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="fillColor" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8b5cf6" fill="url(#fillColor)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Quick buy</h2>
            <span className="text-sm text-primary">Wallet: ${wallet.toFixed(2)}</span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block text-sm text-muted-foreground">
              Service
              <select name="service" defaultValue="algorithmic-10k-followers" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2">
                <option value="algorithmic-10k-followers">Algorithmic 10K followers</option>
                <option value="boost-reel-reach">Boost reel reach</option>
                <option value="music-stream-burst">Music stream burst</option>
                <option value="tiktok-views-surge">TikTok views surge</option>
              </select>
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm text-muted-foreground">
                Quantity
                <input name="quantity" type="number" defaultValue={1000} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2" />
              </label>
              <label className="block text-sm text-muted-foreground">
                Unit price
                <input name="unitPrice" type="number" step="0.01" defaultValue={0.18} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2" />
              </label>
            </div>
            <Button type="submit" className="w-full">Purchase order</Button>
          </form>
          <div className="mt-5 space-y-3">
            {orders.map((order) => (
              <div key={order.id} className="rounded-2xl border border-border bg-muted/50 p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{order.service}</span>
                  <span className="text-xs text-primary">{order.status}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{order.quantity.toLocaleString()} units</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
