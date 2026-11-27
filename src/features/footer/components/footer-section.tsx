import "@/features/home/hero/hero.css";
import type { ComponentType, SVGProps } from "react";
import { Clock, Image, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { cacheLife } from "next/cache";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/common/container";
import { NAV_LINKS } from "@/constants/nav-links";
import { CloudBank } from "@/features/home/hero/components/cloud-bank";
import { LightningField } from "@/features/home/hero/components/lightning-field";
import { SkyBackground } from "@/features/home/hero/components/sky-background";
import { WeatherEffects } from "@/features/home/hero/components/weather-effects";
import { Link } from "@/i18n/navigation";
import { FOOTER_SERVICES, FOOTER_SOCIALS, type FooterSocialKey } from "../config";
import { FacebookIcon, InstagramIcon } from "./brand-icons";
import { NewsletterForm } from "./newsletter-form";

const SOCIAL_ICONS: Record<
  FooterSocialKey,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  facebook: FacebookIcon,
  whatsapp: MessageCircle,
  instagram: InstagramIcon,
};

async function getCopyrightYear() {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}

export async function FooterSection() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const year = await getCopyrightYear();

  return (
    <footer className="relative isolate overflow-hidden text-white">
      <SkyBackground variant="footer" />
      <LightningField />
      <CloudBank position="top" />
      <WeatherEffects />

      <Container className="relative z-10 pt-80">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xl font-normal">{t("tagline")}</p>
            <ul className="mt-4 flex items-center gap-3">
              {FOOTER_SOCIALS.map(({ key, href }) => {
                const Icon = SOCIAL_ICONS[key];

                return (
                  <li key={key}>
                    <a
                      href={href}
                      aria-label={t(`social.${key}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-[34px] items-center justify-center rounded-full border border-white/90 transition hover:bg-white/20"
                    >
                      <Icon className="size-4" strokeWidth={1.5} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-full lg:w-[330px]">
            <p className="text-xl font-medium">{t("newsletter")}</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto_auto] lg:gap-x-16">
          <div>
            <h3 className="text-xl font-medium">{t("infoTitle")}</h3>
            <ul className="mt-5 space-y-4 text-base text-white/80">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-[18px] shrink-0"
                  strokeWidth={1.25}
                />
                <span>
                  {t("address")}
                  <br />
                  {t("country")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-[18px] shrink-0" strokeWidth={1.25} />
                <span>{t("hours")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">{t("contactTitle")}</h3>
            <ul className="mt-5 space-y-3 text-base text-white/80">
              <li>
                <a
                  href="mailto:contact@allforone.mg"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <Mail className="size-[18px] shrink-0" strokeWidth={1.25} />
                  contact@allforone.mg
                </a>
              </li>
              <li>
                <a
                  href="tel:+261340000000"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <Phone className="size-[18px] shrink-0" strokeWidth={1.25} />
                  +261 34 00 000 00
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">{t("navTitle")}</h3>
            <ul className="mt-5 space-y-3 text-base text-white/70">
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className="transition hover:text-white">
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">{t("servicesTitle")}</h3>
            <ul className="mt-5 space-y-3 text-base text-white/70">
              {FOOTER_SERVICES.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className="transition hover:text-white">
                    {t(`services.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div aria-hidden="true" className="relative z-0 mt-6 select-none">
        <Container>
              <img
                src="/footer-wave.svg"
                alt=""
                width={1920}
                height={100}
                className="w-full"
              />
        </Container>
      </div>

      <Container className="relative z-10 pb-6 pt-8">
        <p className="text-xs text-white/70">{t("copyright", { year })}</p>
      </Container>
    </footer>
  );
}
