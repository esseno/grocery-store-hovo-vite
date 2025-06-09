import { Footer } from "@/components/footer";
import Navigation from "@/components/navigation";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_root")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
