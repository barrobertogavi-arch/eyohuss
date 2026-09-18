"use client";

import { useState } from "react";
import { ArrowDownUp, ArrowUpRight, WalletCards } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { walletLedger } from "@/lib/data";

const initialBalance = 1248.5;

export default function WalletPage() {
  const [balance, setBalance] = useState<number>(initialBalance);

  return (
    <main className="space-y-6 pb-20 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Wallet</p>
          <h1 className="text-3xl font-black">Unified digital wallet</h1>
        </div>
        <Button variant="secondary" className="gap-2"><WalletCards className="h-4 w-4" /> Top-up</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Available balance", value: `$${balance.toFixed(2)}`, icon: WalletCards },
          { label: "Pending", value: "$1,089.42", icon: ArrowDownUp },
          { label: "Net inflow", value: "$4,820.04", icon: ArrowUpRight },
          { label: "Affiliate payout", value: "$620.10", icon: ArrowUpRight },
        ].map((item) => (
          <Card key={item.label} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                <p className="mt-3 text-2xl font-bold">{item.value}</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-2 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Ledger history</h2>
            <Badge variant="outline">Last 30 days</Badge>
          </div>
          <div className="space-y-3">
            {walletLedger.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between rounded-2xl border border-border bg-muted/50 p-3">
                <div>
                  <div className="font-medium">{entry.title}</div>
                  <div className="text-xs text-muted-foreground">{new Date(entry.timestamp).toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className={`font-semibold ${entry.type === "credit" ? "text-emerald-500" : "text-rose-500"}`}>
                    {entry.type === "credit" ? "+" : "-"}${entry.amount.toFixed(2)}
                  </div>
                  <div className="text-xs text-muted-foreground">{entry.status}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="mb-4 text-xl font-semibold">Transfer</h2>
          <div className="space-y-3">
            <Button className="w-full" onClick={() => setBalance((current) => current + 50)}>Add $50</Button>
            <Button variant="secondary" className="w-full" onClick={() => setBalance((current) => current - 50)}>Withdraw $50</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
