export const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/realisations" },
  { key: "blog", href: "/blog" },
  { key: "testimonials", href: "/temoignages" },
] as const;

export type NavLinkKey = (typeof NAV_LINKS)[number]["key"];
