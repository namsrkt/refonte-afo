import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/common/navbar";
import { FooterSection } from "@/features/footer/components/footer-section";
import { SKY_SCRIPT } from "@/features/home/hero/sky-script";
import { routing } from "@/i18n/routing";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-24">
        <script dangerouslySetInnerHTML={{ __html: SKY_SCRIPT }} />
        <NextIntlClientProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <FooterSection />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
