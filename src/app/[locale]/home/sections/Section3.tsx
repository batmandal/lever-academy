"use client";

import { Button } from "@/components";
import { useTranslations } from "next-intl";

export const Section3 = () => {
  const t = useTranslations("Section3");

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="parallax-section relative rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] p-4 sm:p-8 w-full h-auto"
    >
      <div className="w-40 sm:w-48 lg:w-60 absolute right-4 top-4 sm:right-10 sm:top-10 lg:right-14 lg:top-14 z-10">
        <Button
          href="https://lever-ed.framer.website/main"
          color={true}
          label={t("mainButtontext")}
        />
      </div>

      <h2
        id="cta-heading"
        className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] text-white absolute bottom-4 left-4 sm:bottom-10 sm:left-10 lg:bottom-14 lg:left-14 font-light leading-tight max-w-screen-lg"
      >
        {t("maintext")}
      </h2>
    </section>
  );
};
