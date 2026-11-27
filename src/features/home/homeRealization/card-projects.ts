// src/features/home/homeRealization/card-projects.ts
import { getTranslations } from "next-intl/server";

export async function getProjects() {
  const t = await getTranslations("ProjectsRealizations");

  return [
    {
      image: "/images/Projects/Ataria_Tech.png",
      title: t("atariaTech.title"),
      description: t("atariaTech.description"),
    },
    {
      image: "/images/Projects/Tantely.png",
      title: t("tantely.title"),
      description: t("tantely.description"),
    },
    {
      image: "/images/Projects/allforkids.png",
      title: t("allforkids.title"),
      description: t("allforkids.description"),
    },
    {
      image: "/images/Projects/madadigitalsecurity.png",
      title: t("madadigitalsecurity.title"),
      description: t("madadigitalsecurity.description"),
    },
  ];
}
