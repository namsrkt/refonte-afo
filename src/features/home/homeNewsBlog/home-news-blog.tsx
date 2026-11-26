import { ArrowRight } from "lucide-react";
import {  useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { articles } from "./articles";
import { HomeNewsBlogHead } from "./home-news-blog-head";
import { HomeNewsBlogCard } from "./home-news-blog-card";

export default function HomeNewsBlog(){
    const t = useTranslations("HomeNewsBlog");

    return(
        <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-12 lg:px-20 lg:py-20">
            <HomeNewsBlogHead/>
            <HomeNewsBlogCard/>
        </section>
    );
}
