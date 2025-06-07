import { VerifyForm } from "@/components/forms/verify-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/verify")({
  component: RouteComponent,
});

function RouteComponent() {
  return <VerifyForm />;
}
