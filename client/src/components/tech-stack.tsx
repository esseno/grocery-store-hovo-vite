import type { JSX } from "react";
import { Icons } from "@/components/ui/icons";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type TechStackItem = {
  label: string;
  purpose?: string;
  icon: JSX.ElementType;
};

type TechStackItems = TechStackItem[];

const TECH_STACK_ITEMS: TechStackItems = [
  {
    label: "Bun",
    purpose: "Runtime",
    icon: Icons.SVGLIcons.Bun,
  },
  {
    label: "Hono",
    purpose: "Backend",
    icon: Icons.SVGLIcons.Hono,
  },
  {
    label: "Vite",
    purpose: "Bundler",
    icon: Icons.SVGLIcons.Vite,
  },
  {
    label: "React",
    purpose: "Frontend",
    icon: Icons.SVGLIcons.React,
  },
  {
    label: "TypeScript",
    purpose: "Frontend",
    icon: Icons.SVGLIcons.TypeScript,
  },
  {
    label: "Tailwindcss",
    purpose: "Styling",
    icon: Icons.SVGLIcons.TailwindCSS,
  },
  {
    label: "Shadcn/ui",
    purpose: "Components",
    icon: Icons.SVGLIcons.ShadcnUI,
  },
  {
    label: "GitHub",
    purpose: "Open Source",
    icon: Icons.SVGLIcons.GitHub,
  },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      <div className="col-span-full text-center mb-6">
        <h2>Our Tech Stack</h2>
      </div>
      {TECH_STACK_ITEMS.map((ts) => (
        <Card
          key={ts.label}
          className="shadow-none not-dark:bg-muted/60"
        >
          <CardHeader>
            <CardTitle>{ts.label}</CardTitle>
            <CardDescription>{ts.purpose}</CardDescription>
            <CardAction>
              <ts.icon className="size-10" />
            </CardAction>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
