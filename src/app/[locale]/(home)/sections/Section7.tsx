import { useState } from "react";
import { FrequentlyQuestionPart } from "../components";
import { FrequentlyQuestions } from "@/data";  // import correctly
import { useTranslations } from "next-intl";

export const Section7 = () => {
  const t = useTranslations("Section7");
  const [isQuestionIndex, setIsQuestionIndex] = useState<number | null>(null);

  
  const frequentlyQuestions = FrequentlyQuestions();

  return (
    <div className="w-full flex flex-col  h-[85vh] items-center" id="Section7">
      <div className="text-center mb-16">
        <h2 className="text-textprimary text-[56px] font-bold">{t("maintext")}</h2>
      </div>
      <div className="w-[70%]">
        {frequentlyQuestions.map((items, index) => (
          <FrequentlyQuestionPart
            onClick={() => setIsQuestionIndex(isQuestionIndex === index ? null : index)}
            key={index}
            questionNo={items.questionNoKey} 
            question={items.questionKey}
            isActive={isQuestionIndex === index}
          />
        ))}
      </div>
    </div>
  );
};
