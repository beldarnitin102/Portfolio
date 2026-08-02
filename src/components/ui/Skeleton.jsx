import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      /* 
        Inherits your clean custom low-contrast pulsing animation rules, 
        fully structured for generic property collection arrays natively!
      */
      className={cn("animate-pulse rounded-md bg-[var(--border-primary)] opacity-20", className)}
      {...props}
    />
  );
}

export { Skeleton };
