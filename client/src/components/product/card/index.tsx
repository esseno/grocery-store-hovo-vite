import { cn } from "@/lib/utils";
import * as React from "react";

export function ProductCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col items-start", className)}
      {...props}
    />
  );
}

function Image({ src, alt, className, ...props }: React.ComponentProps<"img">) {
  return (
    <img
      src={src || "https://placehold.co/400"}
      alt={alt || "Placehold.co 400x400 image"}
      width="100%"
      height="100%"
      className={cn("overflow-hidden object-fill", className)}
      {...props}
    />
  );
}
ProductCard.Image = Image;

function Status({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm font-medium uppercase text-destructive", className)}
      {...props}
    />
  );
}
ProductCard.Status = Status;

function Title({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-base font-medium", className)}
      {...props}
    />
  );
}
ProductCard.Title = Title;

function Description({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-base text-muted-foreground", className)}
      {...props}
    />
  );
}
ProductCard.Description = Description;

function Count({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-base text-muted-foreground", className)}
      {...props}
    />
  );
}
ProductCard.Count = Count;

function Price({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-base font-semibold", className)}
      {...props}
    />
  );
}
ProductCard.Price = Price;
