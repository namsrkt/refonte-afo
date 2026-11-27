import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "hover-fill";
  className?: string;
};

export function CtaLink({ href, label, variant = "primary", className }: CtaLinkProps) {
  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={cn(
          "flex h-[52px] items-center rounded-full border border-white/40 px-8 text-[16px] text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A5FC4]",
          className,
        )}
      >
        {label}
      </Link>
    );
  }

  if (variant === "hover-fill") {
    return (
      <Link
        href={href}
        className={cn(
          "group relative inline-flex w-full items-center justify-between gap-6 overflow-hidden rounded-full border-2 border-white bg-slate-50 p-1.5 pl-6 text-lg text-gray-600 transition-colors duration-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A5FC4] sm:w-auto",
          className,
        )}
      >
        <span
          aria-hidden="true"
          className="absolute bottom-1.5 right-1.5 top-1.5 w-11 rounded-full bg-[#d94f4f] transition-all duration-500 ease-out group-hover:bottom-0 group-hover:right-0 group-hover:top-0 group-hover:w-full"
        />
        <span className="relative whitespace-nowrap">{label}</span>
        <span className="grid size-11 text-white sm:relative sm:place-items-center">
          <ArrowRight
            aria-hidden="true"
            className="absolute right-4 top-4 size-5 transition-transform duration-500 group-hover:-rotate-45 sm:right-3 sm:top-3"
          />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-[54px] w-[244px] items-center justify-between rounded-full bg-white py-0 pl-4 pr-[2px] text-[17px] text-[#555] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A5FC4]",
        className,
      )}
    >
      {label}
      <span className="flex size-[50px] items-center justify-center rounded-full bg-[#D94848] text-white">
        <ArrowRight className="size-5" aria-hidden="true" />
      </span>
    </Link>
  );
}
