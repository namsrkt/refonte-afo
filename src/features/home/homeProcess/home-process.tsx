import { useTranslations } from "next-intl";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";

type Step = {
    number: string;
    key: "analysis" | "design" | "development" | "launch";
    icon: LucideIcon;
  };

  const steps: Step[] = [
    { number: "01", key: "analysis", icon: Search },
    { number: "02", key: "design", icon: PenTool },
    { number: "03", key: "development", icon: Code2 },
    { number: "04", key: "launch", icon: Rocket },
  ];

export default function HomeProcess(){
    const t = useTranslations("HomeProcess");

    return(
        <section className="bg-white px-6 py-16 md:py-24">
            <div className="flex flex-col items-center text-center">
                <span className="rounded-full border-2 borber-gray-500 px-3 py-1 text-[10px] text-gray-500">
                    {t("badge")}
                </span>
                <h2 className="mt-6 text-4xl font-medium text-neutral-800 md:text-5xl">
                    {t("title")}
                </h2>
                <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-gray-500 md:text-base">
                    {t("subtitle")}
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
                { steps.map(({ number, key, icon: Icon }) => (
                <article className="flex flex-col items-center text-center mb-8">
                    <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a4a67] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <span className="absolute -right-4 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[#d64550] text-[8px] font-medium text-white">
                            {number}
                        </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#2a4a67]">
                        {t(`steps.${key}.title`)}
                    </h3>
                    <p className="mt-6 max-w-[200px] text-xs font-light leading-relaxed text-gray-500" >
                        {t(`steps.${key}.description`)}
                    </p>
                </article>
                ))}
            </div>
        </section>
    );
}
