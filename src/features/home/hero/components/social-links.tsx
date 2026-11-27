import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SOCIAL_LINKS } from "../config";

export async function SocialLinks() {
  const t = await getTranslations("Hero.social");

  return (
    <ul className="absolute right-3 top-[70%] z-30 flex -translate-y-1/2 flex-col gap-[11px] md:right-12">
      {SOCIAL_LINKS.map(({ id, href, iconSrc, width, height, labelKey }) => (
        <li key={id}>
          <a
            href={href}
            aria-label={t(labelKey)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-11 items-center justify-center rounded-full bg-[var(--social-bg)] shadow-sm transition duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A5FC4] md:size-12"
          >
            <Image
              src={iconSrc}
              alt=""
              width={width}
              height={height}
              className="h-5 w-auto md:h-6"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
