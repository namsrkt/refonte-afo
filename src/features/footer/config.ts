export type FooterServiceKey =
  | "apps"
  | "uiux"
  | "graphic"
  | "community"
  | "admin";

export type FooterSocialKey = "facebook" | "whatsapp" | "instagram";

export type FooterServiceLink = {
  key: FooterServiceKey;
  href: string;
};

export type FooterSocialLink = {
  key: FooterSocialKey;
  href: string;
};

export const FOOTER_SERVICES: FooterServiceLink[] = [
  { key: "apps", href: "/services#applications" },
  { key: "uiux", href: "/services#ui-ux" },
  { key: "graphic", href: "/services#graphic-design" },
  { key: "community", href: "/services#community-management" },
  { key: "admin", href: "/services#admin-sys-reseau" },
];

export const FOOTER_SOCIALS: FooterSocialLink[] = [
  { key: "facebook", href: "https://www.facebook.com/" },
  { key: "whatsapp", href: "https://wa.me/" },
  { key: "instagram", href: "https://www.instagram.com/" },
];
