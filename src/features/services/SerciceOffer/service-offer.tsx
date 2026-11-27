import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "lucide-react";

const offres = ["vitrine", "professionnel", "ecommerce"] as const;

export function ServiceOffer() {
  const t = useTranslations("offres");

  return (
    <section
      id="offres"
      className="overflow-hidden bg-[#fafafa] px-4 py-12 sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-6xl lg:grid-cols-3 lg:items-center">
        {offres.map((id) => {
          const populaire = id === "professionnel";

          return (
            // Wrapper : porte le halo derrière la carte + l'effet hover
            <div
              key={id}
              className="relative isolate transition duration-300 hover:-translate-y-2"
            >
              {populaire && (
                <>
                  {/* Grand halo diffus */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-3 -inset-y-4 -z-10 rounded-[2.5rem] bg-gradient-to-b from-purple-400/25 via-blue-400/20 to-purple-300/10 blur-3xl lg:-inset-x-8 lg:-inset-y-6"
                  />
                  {/* Halo plus serré, proche des bords */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-b from-purple-500/20 to-blue-500/20 blur-xl"
                  />
                </>
              )}

              <article
                data-populaire={populaire}
                className={`flex flex-col rounded-2xl bg-white p-5 sm:p-6 ${
                  populaire
                    ? "border border-blue-500/70 lg:py-8"
                    : "border border-gray-100 shadow-sm"
                }`}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {t(`${id}.nom`)}
                </h3>

                <p className="mt-5 text-[10px] uppercase tracking-wider text-gray-400">
                  {t("aPartirDe")}
                </p>
                <p className="mt-2 flex items-baseline gap-1">
                  <strong className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    {t(`${id}.prix`)}
                  </strong>
                  <span className="text-xs text-gray-400">{t("parMois")}</span>
                </p>

                <p className="mt-3 text-xs leading-relaxed text-gray-400">
                  {t(`${id}.description`)}
                </p>

                <p className="mt-6 text-[10px] uppercase tracking-wider text-gray-400">
                  {t("inclus")}
                </p>
                <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                  {(t.raw(`${id}.inclus`) as string[]).map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      <span className="text-xs text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs transition ${
                    populaire
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {t("devis")} <ArrowRight className="h-3 w-3" />
                </a>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}