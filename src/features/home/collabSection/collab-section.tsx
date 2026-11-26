"use client";
import { useTranslations } from "next-intl";
import LogoKayKeny from "/public/partner/KayKeny.svg";
import LogoGemlab from "/public/partner/GLC.svg";
import CardCollab from "./card-collab";
import { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

function CollabSection() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const t = useTranslations("CollabSection");
  const COLLAB: { logo: StaticImageData; name: string }[] = [
    {
      name: "KayKeny",
      logo: LogoKayKeny,
    },
    {
      name: "Gemlab",
      logo: LogoGemlab,
    },
    {
      name: "KayKeny",
      logo: LogoKayKeny,
    },
    {
      name: "Gemlab",
      logo: LogoGemlab,
    },
  ];
  return (
    <section className="flex gap-25.25 items-center px-29.25 py-24 bg-[#FBFDFD] flex-col sm:flex-row">
      <p className="font-bold text-lg text-[#2F2F2F] max-w-91.5">
        {t("description")}
      </p>
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }} // Permet de boucler à l'infini
        onMouseEnter={plugin.current.stop} // Met en pause au survol
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex gap-6.75">
          {COLLAB.map((collab, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <CardCollab name={collab.name} logo={collab.logo} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default CollabSection;
