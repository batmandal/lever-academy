import { FrequentlyQuestions } from "@/data";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FrequentlyQuestionPart } from "../components";

export const Section7 = () => {
  const t = useTranslations("Section7");
  const [isQuestionIndex, setIsQuestionIndex] = useState<number | null>(null);

  return (
    <div
      className="w-full flex flex-col justify-center h-screen items-center"
      id="Section7"
    >
      <div className="text-center mb-16">
        <h2 className="text-textprimary text-[56px] font-bold">
          {t("maintext")}
        </h2>
        <p className="text-textsecondary text-[22px]">{t("helpertext")}</p>
      </div>
      <div className="w-[70%]">
        {FrequentlyQuestions.map((items, index) => {
          return (
            <FrequentlyQuestionPart
              onClick={() =>
                setIsQuestionIndex(isQuestionIndex === index ? null : index)
              }
              key={index}
              questionNo={items.questionNo}
              question={items.question}
              isActive={isQuestionIndex === index}
            />
          );
        })}
      </div>
    </div>
  );
};
