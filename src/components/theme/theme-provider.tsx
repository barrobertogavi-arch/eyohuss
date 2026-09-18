import { createContext, useContext, useMemo, useState } from "react";

export interface ThemeContextValue {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [dark, setDark] = useState<boolean>(true);

  const value = useMemo<ThemeContextValue>(() => ({
    dark,
    toggleTheme: () => setDark((current) => !current),
  }), [dark]);

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={dark ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
