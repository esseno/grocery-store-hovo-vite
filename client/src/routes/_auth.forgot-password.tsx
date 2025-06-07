import { ForgotPasswordEmailForm } from "@/components/forms/forgot-password-email-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ForgotPasswordEmailForm />;
}
