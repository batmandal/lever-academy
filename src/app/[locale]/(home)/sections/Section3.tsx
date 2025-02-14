"use client";
import { Button } from "@/components";
import { useTranslations } from "next-intl";

export const Section3 = () => {
  const t = useTranslations("Section3");
  return (
    <div className="parallax-section relative rounded-[40px]">
      <div className="w-60 absolute right-14 top-14">
        <Button href="/" color={true} label="Get Started Free" />
      </div>
      <p className="text-[80px] text-white absolute bottom-14 left-14 font-light">
      {t("maintext")}
      </p>
    </div>
  );
};
