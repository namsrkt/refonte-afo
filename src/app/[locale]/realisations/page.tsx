import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ProjectsSection } from "@/features/projects/components/projects-section";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProjectsPage");

  return { title: t("title") };
}

export default function ProjectsPage() {
  return <ProjectsSection />;
}
