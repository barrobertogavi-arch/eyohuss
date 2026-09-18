"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface ThemeContextValue {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("eyohuss-theme");
    const shouldBeDark = savedTheme ? savedTheme === "dark" : true;
    setDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
    document.documentElement.style.colorScheme = shouldBeDark ? "dark" : "light";
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    window.localStorage.setItem("eyohuss-theme", dark ? "dark" : "light");
  }, [dark]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      dark,
      toggleTheme: () => setDark((current) => !current),
    }),
    [dark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
