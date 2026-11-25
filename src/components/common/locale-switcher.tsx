"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center rounded-full border border-white/30 p-[3px]"
    >
      {routing.locales.map((code) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            type="button"
            aria-pressed={isActive}
            onClick={() => router.replace(pathname, { locale: code })}
            className={cn(
              "rounded-full px-3 py-2 text-sm uppercase leading-none transition-colors",
              isActive
                ? "bg-white font-medium text-[#1E3A5F]"
                : "text-white hover:text-white/80",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
