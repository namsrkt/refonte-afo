import { CarouselApi } from "@/components/ui/carousel";
import useCarouselSnaps from "@/hooks/use-carousel-snaps";

function CarouselDots({ api }: { api: CarouselApi }) {
  const { count, selected } = useCarouselSnaps(api);
  if (count <= 1) return null; // rien à paginer

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Aller à la diapositive ${i + 1}`}
          aria-current={i === selected}
          onClick={() => api?.scrollTo(i)}
          className={`size-2.5 rounded-full transition-colors ${
            i === selected ? "bg-[#243B5E]" : "bg-[#F7FAFD]/40"
          }`}
        />
      ))}
    </div>
  );
}

export default CarouselDots;
