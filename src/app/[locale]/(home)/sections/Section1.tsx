"use client";
import { Button } from "@/components";
import { useTranslations } from "next-intl";

export const Section1 = () => {
  const t = useTranslations("Section1");
  const bt = useTranslations("Button");
  return (
    <div
      id="Section1"
      className="Section1 LinearBackground  flex flex-col text-center pt-52 items-center w-full  "
    >
      <h1 className="text-[80px] w-[1000px] text-textprimary font-bold">
        {t("maintext")}
      </h1>
      <p className=" w-[744px]  text-[24px]  text-textsecondary">
        {t("helpertext")}
      </p>
      <div className="mb-20 mt-14">
        <Button onClick={() => {}} label={bt("mainButtontext")} />
      </div>

      <div></div>
    </div>
  );
};
