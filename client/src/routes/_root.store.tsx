import { Page } from "@/components/page-header";
import { ProductList } from "@/components/product/list";
import { Section } from "@/components/ui/section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_root/store")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Section>
        <div className="flex flex-col items-center">
          <Page>
            <Page.Title>Store</Page.Title>
            <Page.Description>Browse our collection of products</Page.Description>
          </Page>
        </div>
      </Section>
      <Section className="mt-8">
        <ProductList />
      </Section>
    </>
  );
}
