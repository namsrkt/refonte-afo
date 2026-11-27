import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/common/container";
import { LocaleSwitcher } from "@/components/common/locale-switcher";
import { NavLinks } from "@/components/common/nav-links";
import { Link } from "@/i18n/navigation";

export async function Navbar() {
  const t = await getTranslations("Nav");

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--navbar-bg)] transition-colors duration-[1200ms]">
      <Container className="flex h-24 items-center justify-between gap-4">
        <Link href="/" aria-label={t("brand")} className="shrink-0">
          <Image
            src="/logo-allforone.png"
            alt={t("brand")}
            width={760}
            height={160}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <NavLinks />

        <LocaleSwitcher />
      </Container>
    </header>
  );
}
