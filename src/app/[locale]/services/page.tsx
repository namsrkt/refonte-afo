import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ExpertiseSection from "@/features/services/components/expertiseSection/expertise-section";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ServicesPage");

  return { title: t("title") };
}

export default function ServicesPage() {
  return <ExpertiseSection />;
}
