"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import ImageAbout from "/public/image/about-section.jpg";
import CheckImage from "/public/image/check.png";
import Clouds from "@/components/ui/clouds";

const advantages = ["0", "1", "2"] as const;

function AboutSection() {
  const t = useTranslations("AboutSection");

  return (
    <div className="relative isolate grid min-h-full w-full place-items-center overflow-hidden bg-[linear-gradient(180deg,#F7FAFD_0%,#4080D7_24.04%,#FBFDFD_100%)] py-36   px-5 sm:px-30.25 sm:py-44 ">
      {/* Nuages : haut, et bas (retourné) */}
      <Clouds id="clouds-top" seed={3} className="top-0" />
      <Clouds id="clouds-bottom" seed={9} className="bottom-0 -scale-y-100" />

      <section className="flex flex-col items-center sm:flex-row gap-11 text-[#F7FAFD] ">
        <Image
          src={ImageAbout}
          alt={t("image-description.about-section")}
          className="sm:h-155 sm:w-127.5 rounded-2xl object-cover"
        />

        <div className="flex flex-col items-center sm:items-start gap-6">
          <h2 className="rounded-2xl border border-[#F7FAFD] px-2.5 py-1.5 text-sm font-light">
            {t("question")}
          </h2>

          {/* Titre avec « vos idées » surligné en rouge */}
          <p className="text-2xl sm:text-4xl 2xl:text-5xl font-semibold leading-relaxed">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="-z-10 relative isolate inline-block whitespace-nowrap before:absolute before:-inset-x-3 before:inset-y-2 before:-z-10 before:-rotate-[4deg] before:rounded-full before:bg-[#d94f4f]">
                  {chunks}
                </span>
              ),
            })}
          </p>

          <p className="text-[16px] font-light">{t("description")}</p>

          <ul className="flex flex-col gap-6">
            {advantages.map((key) => (
              <li key={key} className="flex items-center gap-3.5">
                <Image
                  src={CheckImage}
                  alt=""
                  className="h-6 w-6 rounded-full border border-[#F7FAFD] px-1 py-1.5"
                />
                <span className="text-[20px] font-light">
                  {t(`list-advantage.${key}`)}
                </span>
              </li>
            ))}
          </ul>

          {/* Bouton avec animation au hover */}
          <Link
            href=""
            className="group relative justify-between inline-flex items-center gap-6 overflow-hidden rounded-full border-2 border-white bg-slate-50 p-1.5 pl-6 text-lg text-gray-600 transition-colors duration-500 hover:text-white w-full sm:w-auto"
          >
            <span
              aria-hidden
              className="absolute bottom-1.5 right-1.5 top-1.5 w-11 rounded-full bg-[#d94f4f] transition-all duration-500 ease-out group-hover:bottom-0 group-hover:right-0 group-hover:top-0 group-hover:w-full"
            />
            <span className="relative">{t("button-text")}</span>
            <span className=" sm:relative grid size-11  sm:place-items-center text-white">
              <ArrowRight
                aria-hidden
                className="size-5 transition-transform duration-500 group-hover:-rotate-45 absolute right-4 top-4 sm:top-3 sm:right-3"
              />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
