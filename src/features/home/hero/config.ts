export type SkyCloud = {
  seed: number;
  width: number;
  top: string;
  duration: number;
  offset: number;
  opacity: number;
  blur?: number;
};

export type SkyLayer = {
  key: string;
  className: string;
  background: string;
};

export const SKY_LAYERS: SkyLayer[] = [
  {
    key: "clear-day",
    className: "sky-clear-day",
    background: "linear-gradient(to bottom, #0954B9 0%, #7EABE7 100%)",
  },
  {
    key: "clear-night",
    className: "sky-clear-night",
    background:
      "linear-gradient(to bottom, #050B1F 0%, #0B1B45 55%, #14275A 82%, #1D3B7A 100%)",
  },
  {
    key: "rain-day",
    className: "sky-rain-day",
    background: "linear-gradient(to bottom, #3F5A78 0%, #7A93AC 55%, #A9BACA 100%)",
  },
  {
    key: "rain-night",
    className: "sky-rain-night",
    background: "linear-gradient(to bottom, #03070F 0%, #0A1524 60%, #12233A 100%)",
  },
  {
    key: "thunder-day",
    className: "sky-thunder-day",
    background: "linear-gradient(to bottom, #222E3A 0%, #3C4A58 60%, #596876 100%)",
  },
  {
    key: "thunder-night",
    className: "sky-thunder-night",
    background: "linear-gradient(to bottom, #01040A 0%, #060D18 60%, #0C1624 100%)",
  },
];

export const SKY_CLOUDS: SkyCloud[] = [
  { seed: 8, width: 460, top: "6%", duration: 120, offset: 0.05, opacity: 0.7 },
  { seed: 21, width: 380, top: "30%", duration: 120, offset: 0.4, opacity: 0.6, blur: 4 },
  { seed: 45, width: 320, top: "54%", duration: 120, offset: 0.75, opacity: 0.55, blur: 4 },
];

export type BankCloud = {
  seed: number;
  width: number;
  left: number;
  bottom: number;
  opacity: number;
  blur?: number;
};

export const BANK_CLOUDS_BACK: BankCloud[] = [
  { seed: 31, width: 520, left: -2, bottom: -70, opacity: 0.6, blur: 4 },
  { seed: 33, width: 480, left: 30, bottom: -90, opacity: 0.55, blur: 4 },
  { seed: 41, width: 540, left: 58, bottom: -60, opacity: 0.6, blur: 4 },
];

export const BANK_CLOUDS_FRONT: BankCloud[] = [
  { seed: 43, width: 460, left: -6, bottom: -50, opacity: 0.95 },
  { seed: 51, width: 520, left: 12, bottom: -80, opacity: 1 },
  { seed: 57, width: 420, left: 38, bottom: -45, opacity: 0.95 },
  { seed: 63, width: 500, left: 55, bottom: -75, opacity: 1 },
  { seed: 71, width: 440, left: 78, bottom: -55, opacity: 0.9 },
];

export type SocialLink = {
  id: string;
  href: string;
  iconSrc: string;
  width: number;
  height: number;
  labelKey: "whatsapp" | "instagram" | "facebook" | "twitter";
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "whatsapp",
    href: "https://wa.me/",
    iconSrc: "/social-media/phone.svg",
    width: 25,
    height: 25,
    labelKey: "whatsapp",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/",
    iconSrc: "/social-media/instagram.svg",
    width: 25,
    height: 25,
    labelKey: "instagram",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/",
    iconSrc: "/social-media/facebook.svg",
    width: 25,
    height: 25,
    labelKey: "facebook",
  },
  {
    id: "twitter",
    href: "https://twitter.com/",
    iconSrc: "/social-media/twitter.svg",
    width: 23,
    height: 19,
    labelKey: "twitter",
  },
];

export type MarqueeLogo = {
  src: string;
  width: number;
  height: number;
};

export const MARQUEE_LOGOS: MarqueeLogo[] = [
  { src: "/partner/KayKeny.svg", width: 88, height: 50 },
  { src: "/partner/GLC.svg", width: 54, height: 50 },
];
