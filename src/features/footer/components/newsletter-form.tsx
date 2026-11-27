"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createNewsletterSchema = (messages: {
  required: string;
  invalid: string;
}) =>
  z.object({
    email: z
      .string()
      .min(1, messages.required)
      .email(messages.invalid),
  });

type NewsletterValues = z.infer<ReturnType<typeof createNewsletterSchema>>;

export function NewsletterForm() {
  const t = useTranslations("Footer");
  const schema = useMemo(
    () =>
      createNewsletterSchema({
        required: t("emailRequired"),
        invalid: t("emailInvalid"),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4">
      <div className="flex h-[54px] items-center rounded-full border border-white/70 pl-2.5 pr-[3px]">
        <input
          type="email"
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          aria-label={t("emailPlaceholder")}
          {...register("email")}
          className="h-full min-w-0 flex-1 bg-transparent px-1 text-base text-white placeholder:text-white/50 focus:outline-none"
        />
        <button
          type="submit"
          className="h-[48px] rounded-full bg-[#DA504F] px-4 text-base text-white transition hover:bg-[#c44343]"
        >
          {t("submit")}
        </button>
      </div>
      {errors.email && (
        <p className="mt-2 pl-4 text-sm text-red-100">{errors.email.message}</p>
      )}
    </form>
  );
}
