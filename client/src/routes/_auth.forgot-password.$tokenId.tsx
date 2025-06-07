import { ForgotPasswordPasswordForm } from "@/components/forms/forgot-password-password-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/forgot-password/$tokenId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ForgotPasswordPasswordForm />;
}
