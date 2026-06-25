import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-[6px] border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--ivory)] outline-none transition-[border-color,background-color] duration-200 placeholder:text-[color:oklch(76%_0.018_77)] focus:border-[var(--gold)]",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-[6px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ivory)] outline-none transition-[border-color,background-color] duration-200 placeholder:text-[color:oklch(76%_0.018_77)] focus:border-[var(--gold)]",
        className
      )}
      {...props}
    />
  );
}
