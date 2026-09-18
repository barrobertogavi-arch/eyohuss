"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/app-context";
import { Card } from "@/components/ui/card";

const commands = [{ label: "Explore media", href: "/media" }, { label: "Open marketplace", href: "/market" }, { label: "Read literature", href: "/literature" }, { label: "Live football", href: "/football" }, { label: "Open wallet", href: "/wallet" }];

export function CommandPalette() {
  const { isCommandPaletteOpen, setCommandPaletteOpen } = useAppContext();
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandPaletteOpen(!isCommandPaletteOpen); } if (event.key === "Escape") setCommandPaletteOpen(false); }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, [isCommandPaletteOpen, setCommandPaletteOpen]);
  if (!isCommandPaletteOpen) return null;
  const filtered = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()));
  return <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[12vh]" onMouseDown={() => setCommandPaletteOpen(false)}><Card className="w-full max-w-xl p-3" onMouseDown={(event) => event.stopPropagation()}><div className="flex items-center gap-2 border-b border-border px-2 pb-3"><Search className="h-4 w-4 text-muted-foreground" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search EYOHUSS..." className="flex-1 bg-transparent outline-none" /><button onClick={() => setCommandPaletteOpen(false)}><X className="h-4 w-4" /></button></div><div className="mt-2 space-y-1">{filtered.map((command) => <button key={command.href} className="w-full rounded-xl p-3 text-left text-sm hover:bg-muted" onClick={() => { router.push(command.href); setCommandPaletteOpen(false); }}>{command.label}</button>)}</div></Card></div>;
}
