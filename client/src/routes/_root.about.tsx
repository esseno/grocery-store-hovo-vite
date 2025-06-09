import { Page } from "@/components/page-header";
import { TechStack } from "@/components/tech-stack";
import { Section } from "@/components/ui/section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_root/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Section>
        <Page>
          <Page.Title>About</Page.Title>
          <Page.Description>
            The Grocery Store Hono + Vite is a project made to learn the basics of ecommerce
            applications and how the handle specific functional requirements.
          </Page.Description>
        </Page>
        <div className="mt-12">
          <TechStack />
        </div>
      </Section>
    </>
  );
}
