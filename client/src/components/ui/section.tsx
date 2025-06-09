import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"section"> {
  bleed?: boolean;
}

export function Section({ children, className, bleed = false, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "md:first:mt-24 p-4 max-w-5xl mx-auto md:p-6",
        { "max-w-full mx-0 bg-muted": bleed },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
