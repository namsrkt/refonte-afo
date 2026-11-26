import { CarouselApi } from "@/components/ui/carousel";
import { useCallback, useSyncExternalStore } from "react";

function useCarouselSnaps(api: CarouselApi) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!api) return () => {};
      api.on("select", onChange).on("reInit", onChange).on("resize", onChange);
      return () => {
        api
          .off("select", onChange)
          .off("reInit", onChange)
          .off("resize", onChange);
      };
    },
    [api],
  );

  const count = useSyncExternalStore(
    subscribe,
    () => api?.scrollSnapList().length ?? 0,
    () => 0,
  );
  const selected = useSyncExternalStore(
    subscribe,
    () => api?.selectedScrollSnap() ?? 0,
    () => 0,
  );
  return { count, selected };
}

export default useCarouselSnaps;
