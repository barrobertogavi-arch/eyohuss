import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/navigation/app-shell";
import { AppProvider } from "@/context/app-context";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { CommandPalette } from "@/components/search/command-palette";

export const metadata: Metadata = {
  title: "EYOHUSS",
  description: "Hybrid media, literature, art, football, news, and affiliate commerce super-app.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <AppProvider>
            <AppShell>{children}</AppShell>
            <CommandPalette />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
