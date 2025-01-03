"use client";
import { Button } from "@/components";
import { useTranslations } from "next-intl";

export const Section1 = () => {
  const t = useTranslations("Homepage");
  return (
    <div className="Section1 LinearBackground  flex flex-col text-center pt-52 items-center w-full  ">
      <h1 className="text-[80px]  w-[1000px] text-textprimary]">
        {/* Elevate Your Writing with AI-Powered Tools */}
        {t("title")}
      </h1>
      <p className=" w-[744px]  text-[24px]  text-textsecondary">
        Create SEO-optimized and plagiarism-free content for your blogs, ads,
        emails. and website 10X faster,
      </p>
      <div className="mb-20 mt-14">
        <Button onClick={() => {}} label="Get Started Free" />
      </div>

      <div></div>
    </div>
  );
};
