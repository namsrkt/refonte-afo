"use client";
import "@/features/home/hero/hero.css";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { CloudBank } from "@/features/home/hero/components/cloud-bank";
import { SkyBackground } from "@/features/home/hero/components/sky-background";
import CarouselDots from "./carousel-dot";
import CardTestimony from "./card-testimony";

function TestimonialSection() {
  const testimonials = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [api, setApi] = useState<CarouselApi>();
  const t = useTranslations("TestimonialSection");
  return (
    <div className="relative isolate overflow-hidden px-10 pt-72 pb-24 sm:px-29.25 sm:pt-80 sm:pb-40">
      <SkyBackground />
      <CloudBank />
      <CloudBank position="top" />

      <section className="relative z-10 text-[#F7FAFD]/70 flex flex-col gap-16.25 items-center">
        <div className="flex flex-col items-center gap-5 max-w-195.5 text-center  ">
          <p className="font-light text-xs border border-[#F7FAFD]/50 px-2.5 py-1.25 rounded-full">
            {t("intro")}
          </p>
          <h2 className="font-medium text-3xl sm:text-7xl">{t("title")}</h2>
          <p className="font-light text-[20px]">{t("description")}</p>
        </div>
        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{ loop: true, align: "start", slidesToScroll: "auto" }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="basis-full md:basis-1/2"
              >
                <CardTestimony />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <CarouselDots api={api} />
      </section>
    </div>
  );
}

export default TestimonialSection;
