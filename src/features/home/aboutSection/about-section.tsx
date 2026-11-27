"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import ImageAbout from "/public/image/about-section.jpg";
import { Check } from "lucide-react";
import CloudImage from "/public/image/cloud.png";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";

const advantages = ["0", "1", "2"] as const;

function AboutSection() {
  // Juste pour faire réference au container de cette section: pour obtenir la largeur
  const cloudsContainer = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const t = useTranslations("AboutSection");
  const nbClouds = useMemo(() => {
    const count = (width / 288) * 2;
    return Array.from({ length: count }, (_, i) => i);
  }, [width]);
  useEffect(() => {
    // lancer la fonction après que le premier rendu soit fait
    setTimeout(updateWidth, 0);
    // fonction qui change la largeur
    function updateWidth() {
      if (!cloudsContainer.current) return;
      setWidth(cloudsContainer.current.getBoundingClientRect().width);
    }
    // Evènement qui garde un oeil sur la redimensionnement de la fenêtre
    window.addEventListener("resize", updateWidth);
    // Libère l'évènement
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <div
      className="relative isolate grid min-h-full w-full place-items-center overflow-hidden py-24 px-5 xl:px-29.25 sm:py-40 bg-[linear-gradient(180deg,#F7FAFD_0%,#4080D7_24.04%,#FBFDFD_100%)]"
      ref={cloudsContainer}
    >
      {/* Nuages : haut, et bas (retourné) */}
      {nbClouds.map((index) => (
        <Fragment key={index}>
          <Image
            src={CloudImage}
            alt=""
            style={{ right: `${index * 200}px` }}
            className="pointer-events-none -z-10 absolute -top-20"
          />
          <Image
            src={CloudImage}
            alt=""
            style={{ right: `${index * 200}px` }}
            className="pointer-events-none -z-10 absolute bottom-0"
          />
        </Fragment>
      ))}
      <section className="flex flex-col items-center lg:flex-row gap-11 text-[#F7FAFD] sm:px-10">
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
          <Link
            href=""
            className="group relative justify-between inline-flex items-center gap-6 overflow-hidden rounded-full border-2 border-white bg-slate-50 p-1.5 pl-6 text-lg text-gray-600 transition-colors duration-500 hover:text-white w-full sm:w-auto"
          >
            <span
              aria-hidden
              className="absolute bottom-1.5 right-1.5 top-1.5 w-11 rounded-full bg-[#d94f4f] transition-all duration-500 ease-out group-hover:bottom-0 group-hover:right-0 group-hover:top-0 group-hover:w-full"
            />
            <span className="relative whitespace-nowrap">
              {t("button-text")}
            </span>
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
