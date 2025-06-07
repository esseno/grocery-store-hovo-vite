import { Button } from "@/components/ui/button";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 relative">
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  );
}

function BackButton() {
  return (
    <Button
      variant={"link"}
      size={"sm"}
      asChild
    >
      <Link to="/">
        <ArrowLeftIcon />
        Back to home
      </Link>
    </Button>
  );
}
