/* Nuages générés en SVG (aucune image nécessaire) */
export default function Clouds({
  id,
  seed,
  className = "",
}: {
  id: string;
  seed: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 -z-10 h-64 w-full [mask-image:linear-gradient(to_bottom,black_20%,transparent)] ${className}`}
    >
      <filter id={id} colorInterpolationFilters="sRGB">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.006 0.014"
          numOctaves="5"
          seed={seed}
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.8 -0.6"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}
