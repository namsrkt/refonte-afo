import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline";
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
