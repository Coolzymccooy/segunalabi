import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-ink/15 px-3 py-1 text-xs text-ink/65",
        className
      )}
    >
      {children}
    </span>
  );
}
