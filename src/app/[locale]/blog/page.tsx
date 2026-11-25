import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BlogSection } from "@/features/blog/components/blog-section";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("BlogPage");

  return { title: t("title") };
}

export default function BlogPage() {
  return <BlogSection />;
}
