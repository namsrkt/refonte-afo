import { ArrowRight } from "lucide-react";
import {  useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { articles } from "./articles";

export function HomeNewsBlogCard() {
    const t = useTranslations("HomeNewsBlog");
    return (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {articles.map((article) => (
            <article key={article.key}>
            <a href="#" className="group flex h-full flex-col">
            <img
                src={article.image}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full rounded-2xl object-cover sm:aspect-square sm:rounded-3xl"
            />

                <div className="mt-5 flex flex-1 flex-col">
                <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-dashed border-gray-400 px-3 py-2 text-xs text-gray-600">
                    {t(`articles.${article.key}.category`)}
                    </span>
                    <span className="rounded-full border border-dashed border-gray-400 px-3 py-2 text-xs text-gray-600 text-center">
                    {article.date}
                    </span>
                </div>

                <h3 className="mt-4 line-clamp-2 text-lg font-medium text-neutral-800 sm:text-xl">
                    {t(`articles.${article.key}.title`)}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-gray-400">
                    {t(`articles.${article.key}.excerpt`)}
                </p>

                <span className="mt-4 inline-flex w-fit items-center gap-1.5  rounded-full bg-[#D95C5C] px-4 py-2 text-xs font-medium text-white transition group-hover:opacity-90">
                    {t("readMore")}
                </span>
                </div>
            </a>
            </article>
        ))}
    </div>
    );
}

