import { getTranslations } from "next-intl/server";
import { Container } from "@/components/common/container";
import { buildServices, type ServiceCopy } from "../services-data";
import { ServicesStackingCards } from "./services-stacking-cards";

export async function ServicesSection() {
  const t = await getTranslations("HomeServices");
  const services = buildServices(t.raw("items") as ServiceCopy[]);

  return (
    <section
      aria-labelledby="home-services-title"
      className="bg-neutral-50 py-20 md:py-28"
    >
      <Container>
        <header className="mb-14 max-w-2xl md:mb-20">
          <h2
            id="home-services-title"
            className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 md:text-base">
            {t("description")}
          </p>
        </header>

        <ServicesStackingCards
          services={services}
          labels={{
            quote: t("quoteCta"),
            more: t("moreCta"),
          }}
        />
      </Container>
    </section>
  );
}
