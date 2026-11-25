import { getTranslations } from "next-intl/server";
import { Container } from "@/components/common/container";

export async function ServicesSection() {
  const t = await getTranslations("ServicesPage");

  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-3 text-muted-foreground">{t("description")}</p>
      </Container>
    </section>
  );
}
