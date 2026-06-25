import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
};

const variants = {
  primary: "border-[var(--gold)] bg-[var(--gold)] text-[var(--void)] hover:bg-[var(--champagne)]",
  outline: "border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--void)]",
  ghost: "border-[var(--border)] text-[var(--champagne)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
};

const sizes = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base"
};

export function Button({
  variant = "outline",
  size = "md",
  className,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[6px] border font-medium transition-[background-color,border-color,color,transform] duration-200 ease-[var(--ease-out)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-45",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "outline",
  size = "md",
  className,
  href,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[6px] border font-medium transition-[background-color,border-color,color,transform] duration-200 ease-[var(--ease-out)] active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
