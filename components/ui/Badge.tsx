import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-[6px] border border-[var(--border)] bg-[var(--surface)] px-3 text-xs font-medium text-[var(--champagne)]",
        className
      )}
    >
      {children}
    </span>
  );
}
