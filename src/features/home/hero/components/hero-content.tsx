import { getTranslations } from "next-intl/server";
import { CtaLink } from "@/components/common/cta-link";

export async function HeroContent() {
  const t = await getTranslations("Hero");

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-[clamp(2.25rem,6vw,5.4rem)] font-semibold leading-[1.3] text-[#EAF2FC]">
        {t("titleLine1")}
        <br />
        {t("titleLine2")}
      </h1>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        <CtaLink href="/devis" label={t("ctaQuote")} />
        <CtaLink href="/contact" label={t("ctaContact")} variant="outline" />
      </div>
    </div>
  );
}
