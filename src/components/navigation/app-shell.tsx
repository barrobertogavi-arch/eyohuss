"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Home, Library, Menu, Moon, Search, ShoppingBag, Sun, WalletCards } from "lucide-react";
import { useAppContext } from "@/context/app-context";
import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/media", label: "Media", icon: Library },
  { href: "/market", label: "Market", icon: ShoppingBag },
  { href: "/football", label: "Football", icon: Menu },
  { href: "/wallet", label: "Wallet", icon: WalletCards },
];

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { setCommandPaletteOpen } = useAppContext();
  const { dark, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-background/90 p-5 backdrop-blur md:flex">
        <Link href="/" className="mb-10 text-2xl font-black tracking-tight">EYOHUSS<span className="text-primary">.</span></Link>
        <nav className="space-y-1">
          {links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm ${pathname === href ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}><Icon className="h-4 w-4" />{label}</Link>)}
        </nav>
        <div className="mt-auto space-y-2">
          <Button variant="secondary" className="w-full justify-start gap-3" onClick={() => setCommandPaletteOpen(true)}><Search className="h-4 w-4" />Search <kbd className="ml-auto text-xs">⌘K</kbd></Button>
          <Button variant="ghost" className="w-full justify-start gap-3" onClick={toggleTheme}>{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}Theme</Button>
        </div>
      </aside>
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur md:ml-64 md:px-8">
        <button className="flex items-center gap-2 text-sm text-muted-foreground md:hidden" onClick={() => setCommandPaletteOpen(true)}><Search className="h-4 w-4" /> Search</button>
        <div className="hidden text-sm font-medium md:block">Your world, intelligently connected.</div>
        <div className="ml-auto flex items-center gap-2"><Button variant="ghost" size="icon"><Bell className="h-4 w-4" /></Button><Button variant="ghost" size="icon" onClick={toggleTheme}>{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</Button></div>
      </header>
      <div className="md:ml-64"><div className="mx-auto max-w-7xl p-4 md:p-8">{children}</div></div>
      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">{links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`flex flex-col items-center gap-1 rounded-xl p-2 text-[10px] ${pathname === href ? "text-primary" : "text-muted-foreground"}`}><Icon className="h-4 w-4" />{label}</Link>)}</nav>
    </div>
  );
}
