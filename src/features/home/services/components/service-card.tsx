"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { Link } from "@/i18n/navigation";
import type { Service } from "../services-data";

type ServiceCardProps = {
  service: Service;
  index: number;
  total: number;
  progress: MotionValue<number>;
  animate: boolean;
  labels: {
    quote: string;
    more: string;
  };
};

export function ServiceCard({
  service,
  index,
  total,
  progress,
  animate,
  labels,
}: ServiceCardProps) {
  const targetScale = 1 - (total - index - 1) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const titleId = `home-service-${service.id}-title`;

  return (
    <div className="w-full flex justify-center py-6 motion-reduce:md:static motion-reduce:md:h-auto motion-reduce:md:py-6 md:sticky md:top-24 md:h-[calc(100svh-6rem)] md:items-center md:py-0">
      <motion.article
        aria-labelledby={titleId}
        style={{
          scale: animate ? scale : 1,
          top: animate ? `calc(-2vh + ${index * 10}px)` : undefined,
        }}
        className="relative grid w-full max-w-7xl origin-top gap-5 rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.18)] sm:p-6 md:min-h-[420px] md:grid-cols-2 md:gap-6 md:p-3"
      >
        <div className="order-2 flex flex-col gap-5 p-2 md:order-1 md:p-8">
          <h3
            id={titleId}
            className="flex items-baseline gap-3 text-2xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-3xl"
          >
            <span className="font-semibold tabular-nums">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <span>{service.title}</span>
          </h3>

          <ul className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-dashed border-neutral-300 px-3 py-2.5 text-xs text-neutral-600"
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="max-w-md text-sm leading-relaxed text-neutral-500 md:text-base">
            {service.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-3 md:mt-auto">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center rounded-full bg-[#D94848] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#c23c3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94848] focus-visible:ring-offset-2"
            >
              {labels.quote}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
            >
              {labels.more}
            </Link>
          </div>
        </div>

        <div className="relative order-1 aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] bg-neutral-100 md:order-2 md:aspect-auto md:min-h-[360px]">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            preload={index === 0}
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </motion.article>
    </div>
  );
}
