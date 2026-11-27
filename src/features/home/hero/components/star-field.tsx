import { mulberry32 } from "../seeded-random";

const STAR_COUNT = 120;

const random = mulberry32(20260525);

const STARS = Array.from({ length: STAR_COUNT }, (_, index) => ({
  id: index,
  left: random() * 100,
  top: random() * 72,
  size: 1 + random() * 2,
  duration: 2.5 + random() * 4,
  delay: random() * 6,
}));

export function StarField() {
  return (
    <div className="hero-stars">
      {STARS.map((star) => (
        <span
          key={star.id}
          className="hero-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
