import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { getProjects } from "@/features/home/homeRealization/card-projects";

export default async function HeroRealization() {
  const t = await getTranslations("homeRealization");
  const projects = await getProjects();

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-12 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-base md:mt-8 md:text-lg">
              {t("description")}
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#D95C5C] py-2 pl-5 pr-2 text-xs font-medium text-white transition hover:opacity-90 sm:pl-6 sm:text-sm"
          >
            <span>{t("button")}</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#D95C5C] sm:h-9 sm:w-9">
              <ArrowRight className="h-4 w-4 -rotate-45 sm:h-5 sm:w-5" />
            </span>
          </button>
        </div>

        {/* Grille des projets */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:mt-12 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-2xl border border-gray-300 bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:rounded-[28px] sm:p-5"
            >
              <div className="mb-4 w-full overflow-hidden rounded-xl sm:mb-5 sm:rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-56 md:h-64"
                />
              </div>

              <div className="px-1 pb-1">
                <span className="mb-2.5 inline-block rounded-full border-2 border-dotted border-gray-300 px-5 py-2 text-xs font-medium text-gray-600 sm:mb-3 sm:px-6 sm:py-2.5 sm:text-sm">
                  Développement web
                </span>

                <div className="flex items-end justify-between gap-3 sm:items-center sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="mt-1 max-w-sm text-xs leading-snug text-gray-400 sm:text-sm">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href="#"
                    aria-label={`Voir ${project.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-solid border-transparent bg-[#D95C5C] text-white transition-all duration-200 hover:border-gray-400 hover:bg-white hover:text-[#D95C5C] sm:h-11 sm:w-11"
                  >
                    <ArrowRight className="h-4 w-4 -rotate-45 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

