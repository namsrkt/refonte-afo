"use client";

import { useStackingCards } from "../hooks/use-stacking-cards";
import type { Service } from "../services-data";
import { ServiceCard } from "./service-card";

type ServicesStackingCardsProps = {
  services: Service[];
  labels: {
    quote: string;
    more: string;
  };
};

export function ServicesStackingCards({
  services,
  labels,
}: ServicesStackingCardsProps) {
  const { containerRef, scrollYProgress, animate } = useStackingCards();

  return (
    <div ref={containerRef} className="relative">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          total={services.length}
          progress={scrollYProgress}
          animate={animate}
          labels={labels}
        />
      ))}
    </div>
  );
}
