import { CloudBank } from "@/features/home/hero/components/cloud-bank";
import { HeroClouds } from "@/features/home/hero/components/hero-clouds";
import { SkyBackground } from "@/features/home/hero/components/sky-background";
import { Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

interface Expertise {
  title: string;
  description: string;
  badge: string[];
}

function ExpertiseSection() {
  const t = useTranslations("ExpertiseSection");
  const listExpertise = t.raw("list-expertise") as Expertise[];
  return (
    <section className="relative text-[#F7FAFD] pt-24 flex flex-col gap-16.25">
      <SkyBackground />
      <CloudBank />
      <CloudBank position="top" />
      <HeroClouds />
      <div className="flex flex-col gap-2.5 max-w-212.5  px-5 sm:px-29.25">
        <h2 className="font-medium text-3xl sm:text-[70px]">{t("title")}</h2>
        <p className="font-light text-lg sm:text-[20px] p-2.5">
          {t("description")}
        </p>
      </div>
      <div className="px-2.5 lg:px-5 xl:px-6 2xl:px-29.25 flex flex-col gap-5 lg:grid lg:grid-cols-3 justify-between mb-20 z-10 relative">
        {listExpertise.map((expertise, index) => (
          <CardExpertise key={index} expertise={expertise} />
        ))}
      </div>
    </section>
  );
}

export default ExpertiseSection;

function CardExpertise({ expertise }: { expertise: Expertise }) {
  return (
    <div className=" border border-[#F7FAFD]/40 rounded-4xl w-full sm:max-w-[371.33px] sm:h-97.25 bg-[#F7FAFD]/6 p-3.75 flex flex-col justify-between">
      <div className="flex flex-col gap-3.75">
        <div className="rounded-2xl p-5 bg-[#F7FAFD] size-14.25 flex justify-center items-center ">
          <Rocket size={32} color="#28475C" className="shrink-0" />
        </div>
        <h3 className="font-medium text-2xl lg:whitespace-nowrap">
          {expertise.title}
        </h3>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-light text-[16px]">{expertise.description}</p>
        <div className="flex flex-wrap gap-2.5">
          {expertise.badge.map((badge, index) => (
            <CardBadge badge={badge} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CardBadge({ badge }: { badge: string }) {
  return (
    <p className="p-2.5 rounded-full border border-dashed border-[#F7FAFD] w-fit font-light text-sm">
      {badge}
    </p>
  );
}
