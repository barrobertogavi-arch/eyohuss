import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChartColumnBig, CreditCard, Users } from 'lucide-react';
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const chartData = [
  { name: 'Jan', value: 120 },
  { name: 'Feb', value: 160 },
  { name: 'Mar', value: 150 },
  { name: 'Apr', value: 220 },
  { name: 'May', value: 240 },
  { name: 'Jun', value: 300 },
  { name: 'Jul', value: 330 },
];

export default function SMMPage() {
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
          { label: 'Gross revenue', value: '$284.9K', icon: CreditCard },
          { label: 'Active bundles', value: '1,342', icon: Users },
          { label: 'Processor uptime', value: '99.98%', icon: ArrowUpRight },
          { label: 'Auto approvals', value: '4.8s avg', icon: ChartColumnBig },
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

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
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
          <h2 className="mb-4 text-xl font-semibold">Quick buy</h2>
          <div className="space-y-3">
            {[
              'Algorithmic 10K followers',
              'Boost reel reach',
              'Music stream burst',
              'TikTok views surge',
            ].map((service) => (
              <div key={service} className="flex items-center justify-between rounded-2xl border border-border bg-muted/50 p-3">
                <span className="text-sm">{service}</span>
                <Button size="sm" variant="secondary">Buy</Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
