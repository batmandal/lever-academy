"use client";
import { Button } from "@/components";
import { useTranslations } from "next-intl";

export const Section3 = () => {
  const t = useTranslations("Section3");

  return (
    <div className="parallax-section relative rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] p-4 sm:p-8">
      <div className="w-40 sm:w-48 lg:w-60 absolute right-4 top-4 sm:right-10 sm:top-10 lg:right-14 lg:top-14">
        <Button
          href="https://lever-ed.framer.website/main?fbclid=IwY2xjawIj8etleHRuA2FlbQIxMQABHchsgYhOJtvNfXHzUnPcd2w01ZDsAVguuoXzEHJmc6zQPMzmzjrohdqUNw_aem_e22uclMJLOj9FmA5P-Eh7Q"
          color={true}
          label={t("mainButtontext")}
        />
      </div>
      <p className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] text-white absolute bottom-4 left-4 sm:bottom-10 sm:left-10 lg:bottom-14 lg:left-14 font-light leading-tight">
        {t("maintext")}
      </p>
    </div>
  );
};
