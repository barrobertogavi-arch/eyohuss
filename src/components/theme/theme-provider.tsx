"use client";

import { useEffect, useState } from "react";

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [dark, setDark] = useState<boolean>(true);
  useEffect(() => {
    const stored = window.localStorage.getItem("eyohuss-theme");
    const initial = stored ? stored === "dark" : true;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("eyohuss-theme", dark ? "dark" : "light");
  }, [dark]);
  return <div data-theme={dark ? "dark" : "light"}>{children}</div>;
}

export function useTheme() {
  const [dark, setDark] = useState<boolean>(true);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  return { dark, toggleTheme: () => setDark((value) => !value) };
}
