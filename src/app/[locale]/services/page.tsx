import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServicesSection } from "@/features/services/components/services-section";
import { ServiceOffer} from "@/features/services/SerciceOffer/service-offer";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ServicesPage");

  return { title: t("title") };
}

export default function ServicesPage() {
  return (
    <>
      <ServiceOffer/>
    </>
  );
}
