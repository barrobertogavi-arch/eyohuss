"use client";

import { createContext, useContext, useMemo, useState } from "react";

export interface AppContextValue {
  isCommandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  activeSector: string;
  setActiveSector: (sector: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isCommandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [activeSector, setActiveSector] = useState<string>("home");
  const value = useMemo<AppContextValue>(() => ({ isCommandPaletteOpen, setCommandPaletteOpen, activeSector, setActiveSector }), [isCommandPaletteOpen, activeSector]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used inside AppProvider");
  return context;
}
