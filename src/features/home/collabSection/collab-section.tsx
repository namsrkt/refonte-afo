"use client";
import { useTranslations } from "next-intl";
import LogoKayKeny from "/public/partner/KayKeny.svg";
import LogoGemlab from "/public/partner/GLC.svg";
import CardCollab from "./card-collab";
import { StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

function CollabSection() {
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
    {
      name: "KayKeny",
      logo: LogoKayKeny,
    },
  ];
  return (
    <section className="grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-2 gap-10 sm:gap-25.25 items-center sm:px-29.25 py-15 sm:py-24 bg-[#FBFDFD] flex-col sm:flex-row">
      <p className="font-bold text-lg text-[#2F2F2F] px-5 text-center sm:text-left sm:px-0">
        {t("description")}
      </p>
      <Carousel
        plugins={[
          AutoScroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{ loop: true, align: "start", dragFree: true }}
        className="overflow-hidden sm:col-span-2"
      >
        <CarouselContent className="flex justify-between gap-2 sm:gap-6.75 pl-2 sm:pl-6.75 w-full">
          {COLLAB.map((collab, index) => (
            <CarouselItem key={index} className="basis-auto">
              <CardCollab name={collab.name} logo={collab.logo} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default CollabSection;
