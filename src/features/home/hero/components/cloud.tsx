"use client";

import { useId } from "react";

type CloudProps = {
  seed: number;
  width: number;
  opacity?: number;
  blur?: number;
};

export function Cloud({ seed, width, opacity = 0.85, blur = 2 }: CloudProps) {
  const uid = useId().replace(/:/g, "");
  const filterId = `cloud-filter-${uid}`;
  const gradientId = `cloud-gradient-${uid}`;

  return (
    <svg
      viewBox="0 0 600 300"
      width={width}
      height={width / 2}
      style={{ opacity, overflow: "visible" }}
      aria-hidden
      focusable="false"
    >
      <defs>
        {/* Blanc au sommet, bleu très pâle en bas : donne du volume */}
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c9dcf4" />
        </linearGradient>

        <filter
          id={filterId}
          x="-30%"
          y="-40%"
          width="160%"
          height="180%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="soft" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.026"
            numOctaves="4"
            seed={seed}
            result="noise"
          />
          <feDisplacementMap
            in="soft"
            in2="noise"
            scale="46"
            xChannelSelector="R"
            yChannelSelector="G"
            result="shape"
          />
          <feGaussianBlur in="shape" stdDeviation={blur} />
        </filter>
      </defs>

      <g filter={`url(#${filterId})`} fill={`url(#${gradientId})`}>
        {/* Base plate */}
        <ellipse cx="300" cy="198" rx="265" ry="34" />

        {/* Bulles du sommet (profil cumulus) */}
        <circle cx="110" cy="182" r="44" />
        <circle cx="185" cy="152" r="58" />
        <circle cx="275" cy="122" r="74" />
        <circle cx="375" cy="140" r="64" />
        <circle cx="455" cy="168" r="48" />
        <circle cx="525" cy="190" r="34" />

        {/* Remplissage du centre */}
        <circle cx="300" cy="176" r="68" />
      </g>
    </svg>
  );
}
