import { MARQUEE_LOGOS } from "../config";

const PAIRS_PER_GROUP = 6;

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-[75px] pr-[75px]"
      aria-hidden={hidden || undefined}
    >
      {Array.from({ length: PAIRS_PER_GROUP }).map((_, index) => (
        <div key={index} className="flex items-center gap-[75px]">
          {MARQUEE_LOGOS.map((logo) => (
            <span
              key={`${logo.src}-${index}`}
              className="hero-logo"
              style={{
                width: logo.width,
                height: logo.height,
                maskImage: `url(${logo.src})`,
                WebkitMaskImage: `url(${logo.src})`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div
      className="logo-marquee-wrap relative w-full overflow-hidden py-6"
      style={{ backgroundColor: "var(--bank-fade)" }}
      aria-hidden="true"
    >
      <div className="logo-marquee flex w-max">
        <LogoGroup />
        <LogoGroup hidden />
      </div>
    </div>
  );
}
