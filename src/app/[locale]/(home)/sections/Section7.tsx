import { FrequentlyQuestionPart } from "@/components";
import { FrequentlyQuestions } from "@/data";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const Section7 = () => {
  const t = useTranslations("Section7");
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col items-center" id="Section7">
      <div className="text-center mb-16">
        <h2 className="text-textprimary text-[56px]">{t("maintext")}</h2>
        <p className="text-textsecondary text-[22px]">{t("helpertext")}</p>
      </div>
      <div className="w-[70%]">
        {FrequentlyQuestions.map((items, index) => {
          return (
            <FrequentlyQuestionPart
              onClick={handleClick}
              key={index}
              questionNo={items.questionNo}
              question={items.question}
              answer={items.answer}
              active={isActive}
            />
          );
        })}
      </div>
    </div>
  );
};
