import * as React from "react";
import { cn } from "@/lib/utils";

export function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-center", className)}
      {...props}
    />
  );
}

export function Title({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("", className)}
      {...props}
    />
  );
}
Page.Title = Title;

export function Description({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("large", className)}
      {...props}
    />
  );
}
Page.Description = Description;
