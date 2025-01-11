"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const categories = [
  "Data Science",
  "IT Certifications",
  "Leadership",
  "Web Development",
  "Communication",
  "Business Analytics & Intelligence",
  "...",
];

export const Section2 = () => {
  const t = useTranslations("Section2");
  const [isActive, setIsActive] = useState(categories[0]);
  return (
    <div className="w-full mt-28 flex flex-col gap-10">
      <div>
        <p className="text-textprimary text-[48px] font-bold">
          {t("maintext")}
        </p>
        <p className="text-textsecondary text-[22px]">{t("helpertext")}</p>
      </div>
      <div>
        <div className="w-full flex gap-2">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setIsActive(category);
                }}
                className={`py-4 px-6 rounded-full cursor-pointer ${
                  category === isActive
                    ? "bg-button text-white"
                    : "bg-[#F9F9F9]"
                }`}
              >
                {category}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
