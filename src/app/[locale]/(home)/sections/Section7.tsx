"use client";

import { useState } from "react";
import { FrequentlyQuestionPart } from "../components";
import { FrequentlyQuestions } from "@/data";
import { useTranslations } from "next-intl";

export const Section7 = () => {
  const t = useTranslations("Section7");
  const [isQuestionIndex, setIsQuestionIndex] = useState<number | null>(null);

  const frequentlyQuestions = FrequentlyQuestions();

  return (
    <section
      id="Section7"
      aria-labelledby="faq-heading"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center"
    >
      <div className="text-center mb-16 max-w-3xl">
        <h2
          id="faq-heading"
          className="text-textprimary text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-tight"
        >
          {t("maintext")}
        </h2>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-6">
        {frequentlyQuestions.map((item, index) => (
          <FrequentlyQuestionPart
            key={index}
            onClick={() =>
              setIsQuestionIndex(isQuestionIndex === index ? null : index)
            }
            questionNo={item.questionNoKey}
            question={item.questionKey}
            isActive={isQuestionIndex === index}
          />
        ))}
      </div>
    </section>
  );
};
