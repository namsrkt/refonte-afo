export const SERVICE_IMAGES = {
  "app-desktop-mobile": "/images/services/app-desktop-mobile.png",
  "ui-ux-design": "/images/services/ui-ux-design.png",
  "graphic-design": "/images/services/graphic-design.png",
  "community-management": "/images/services/community-management.png",
  "admin-sys-reseaux": "/images/services/admin-sys-reseaux.png",
} as const;

export type ServiceId = keyof typeof SERVICE_IMAGES;

export type ServiceCopy = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageAlt: string;
};

export type Service = Omit<ServiceCopy, "id"> & {
  id: ServiceId;
  image: string;
};

const SERVICE_IDS = new Set<string>(Object.keys(SERVICE_IMAGES));

export function isServiceId(value: string): value is ServiceId {
  return SERVICE_IDS.has(value);
}

export function buildServices(items: ServiceCopy[]): Service[] {
  return items.flatMap((item) => {
    if (!isServiceId(item.id)) return [];

    return [{ ...item, id: item.id, image: SERVICE_IMAGES[item.id] }];
  });
}
