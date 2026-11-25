import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/common/locale-switcher";
import { Link } from "@/i18n/navigation";

export async function Navbar() {
  const t = await getTranslations("Nav");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          {t("brand")}
        </Link>
        <nav aria-label={t("label")} className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("home")}
          </Link>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
