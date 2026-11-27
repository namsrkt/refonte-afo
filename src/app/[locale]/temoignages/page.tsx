import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TestimonialsSection } from "@/features/testimonials/components/testimonials-section";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("TestimonialsPage");

  return { title: t("title") };
}

export default function TestimonialsPage() {
  return <TestimonialsSection />;
}
