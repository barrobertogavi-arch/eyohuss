import { cn } from "@/lib/utils";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> { variant?: "default" | "outline"; }
export function Badge({ className, variant = "default", ...props }: BadgeProps) { return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", variant === "outline" ? "border border-border" : "bg-primary/15 text-primary", className)} {...props} />; }
