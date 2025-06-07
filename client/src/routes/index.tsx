import { buttonVariants } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/"!
      <Link
        to="/login"
        className={buttonVariants({ variant: "secondary" })}
      >
        Login
      </Link>
    </div>
  );
}
