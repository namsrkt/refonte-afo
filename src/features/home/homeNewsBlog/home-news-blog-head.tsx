import { ArrowRight } from "lucide-react";
import {  useTranslations } from "next-intl";

export function HomeNewsBlogHead() {
    const t = useTranslations("HomeNewsBlog");
    return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="max-w-2xl lg:max-w-3xl">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
                {t("title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:mt-5 sm:text-base md:mt-6">
                {t("description")}
            </p>
        </div>
        <a
            href="#"
            className="group flex w-fit shrink-0 items-center gap-3 whitespace-nowrap rounded-full bg-[#D95C5C] py-2 pl-5 pr-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#c94f4f] hover:shadow-lg hover:shadow-[#D95C5C]/30 sm:pl-6 sm:text-sm"
            >
            <span>{t("button")}</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#D95C5C] transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9">
                <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0 sm:h-5 sm:w-5" />
            </span>
        </a>
    </div>
    );
}