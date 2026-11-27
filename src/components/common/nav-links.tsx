"use client";

import { useTranslations } from "next-intl";
import { NAV_LINKS } from "@/constants/nav-links";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  return (
    <nav
      aria-label={t("label")}
      className="hidden items-center gap-1 rounded-full bg-[#E6F0F9] p-[5px] md:flex"
    >
      {NAV_LINKS.map(({ key, href }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={key}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full px-4 py-3.5 text-[15px] leading-none transition-colors",
              isActive
                ? "bg-[#DA504F] font-semibold text-white"
                : "font-normal text-[#1E3A5F] hover:text-[#DA504F]",
            )}
          >
            {t(key)}
          </Link>
        );
      })}
    </nav>
  );
}
