"use client";

import "@/features/home/hero/hero.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import ImageAbout from "/public/image/about-section.jpg";
import { CtaLink } from "@/components/common/cta-link";
import { CloudBank } from "@/features/home/hero/components/cloud-bank";
import { SkyBackground } from "@/features/home/hero/components/sky-background";

const advantages = ["0", "1", "2"] as const;

function AboutSection() {
  const t = useTranslations("AboutSection");
  return (
    <div
      className="relative isolate grid min-h-full w-full place-items-center overflow-hidden px-5 pt-72 pb-24 xl:px-29.25 sm:pt-80 sm:pb-40"
    >
      <CloudBank />
      <CloudBank position="top" />
      <SkyBackground />

      <section className="relative z-10 flex flex-col items-center lg:flex-row gap-11 text-[#F7FAFD] sm:px-10">
        <Image
          src={ImageAbout}
          alt={t("image-description.about-section")}
          className="lg:h-155 lg:w-127.5 rounded-2xl object-cover"
        />

        <div className="flex flex-col items-center lg:items-start gap-6">
          <h2 className="rounded-2xl border border-[#F7FAFD] px-2.5 py-1.5 text-sm font-light">
            {t("question")}
          </h2>

          {/* Titre avec « vos idées » surligné en rouge */}
          <p className="text-2xl sm:text-4xl 2xl:text-5xl font-semibold leading-relaxed text-center lg:text-left">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="-z-10 relative isolate inline-block whitespace-nowrap before:absolute before:-inset-x-3 before:inset-y-2 before:-z-10 before:rotate-[-4deg] before:rounded-full before:bg-[#d94f4f]">
                  {chunks}
                </span>
              ),
            })}
          </p>

          <p className="text-[16px] font-light">{t("description")}</p>

          <ul className="flex flex-col gap-6 self-start">
            {advantages.map((key) => (
              <li key={key} className="flex items-center gap-3.5">
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#F7FAFD]">
                  <Check aria-hidden className="size-3.5" />
                </span>
                <span className="sm:text-[20px] font-light">
                  {t(`list-advantage.${key}`)}
                </span>
              </li>
            ))}
          </ul>

          {/* Bouton avec animation au hover */}
          <CtaLink href="" label={t("button-text")} variant="hover-fill" />
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
