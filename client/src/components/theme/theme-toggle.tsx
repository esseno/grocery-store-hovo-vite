import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { useCallback } from "react";
import { Icons } from "@/components/ui/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme]
  );

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggle}
    >
      <Icons.RemixIcons.SunFill className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Icons.RemixIcons.MoonClearFill className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
