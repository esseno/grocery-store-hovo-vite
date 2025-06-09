import { Page } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_root/")({
  component: RouteComponent,
});

const QUICK_LINKS = [
  { href: "/store", label: "Browse store" },
  { href: "/login/admin", label: "Login as Admin" },
];

function RouteComponent() {
  return (
    <>
      <Section>
        <div className="flex flex-col items-center">
          <Page>
            <Page.Title>Welcome to GSHV</Page.Title>
            <Page.Description>An ecommerce grocery store built with Hono + Vite</Page.Description>
          </Page>
          <div className="mt-8 grid grid-cols-1 gap-2 w-4/5 md:w-2/5">
            <div>
              <p className="text-xs text-muted-foreground font-medium">QUICK LINKS</p>
            </div>
            {QUICK_LINKS.map((link, idx) => (
              <Button
                key={idx}
                variant="secondary"
                size="lg"
                className="justify-start"
                asChild
              >
                <Link to={link.href}>
                  <Icons.RemixIcons.RightArrowSFill />
                  {link.label}
                </Link>
              </Button>
            ))}
            <div className="mt-6">
              <p className="text-xs text-muted-foreground font-medium">OTHER LINKS</p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="justify-start"
              asChild
            >
              <a
                href="https://github.com/esseno/grocery-store-hovo-vite"
                target="_blank"
              >
                <Icons.RemixIcons.GitHubFill />
                Github repository
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
