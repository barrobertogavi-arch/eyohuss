import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: "default" | "secondary" | "outline" | "ghost"; size?: "default" | "sm" | "icon"; asChild?: boolean; }
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = { default: "bg-primary text-primary-foreground hover:opacity-90", secondary: "bg-secondary text-secondary-foreground hover:bg-accent", outline: "border border-border hover:bg-muted", ghost: "hover:bg-muted" };
const sizes: Record<NonNullable<ButtonProps["size"]>, string> = { default: "h-10 px-4", sm: "h-9 px-3 text-sm", icon: "h-10 w-10" };
export function Button({ className, variant = "default", size = "default", asChild, children, ...props }: ButtonProps) { const classes = cn("inline-flex items-center justify-center rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes[size], className); if (asChild) return <span className={classes}><Link href={(children as React.ReactElement<{ href: string }>).props.href}>{children}</Link></span>; return <button className={classes} {...props}>{children}</button>; }
