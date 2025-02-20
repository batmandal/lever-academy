import { FrequentlyQuestions } from "@/data";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useState } from "react";

type FrequentlyQuestionPartType = {
  questionNo: string;
  question: string;
  onClick: () => void;
  isActive: boolean;
};

export const FrequentlyQuestionPart = (props: FrequentlyQuestionPartType) => {
  const { questionNo, question, onClick, isActive } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 100);

    if (onClick) {
      onClick();
    }
  };


  const frequentlyQuestions = FrequentlyQuestions();

  const answer = frequentlyQuestions.find(
    (item) => item.questionNoKey === questionNo
  )?.answerKey;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center mb-3">
        <div className="flex gap-3 font-bold text-textprimary text-xl md:text-3xl">
          <span>{questionNo}</span>
          <p>{question}</p>
        </div>
        <span
          onClick={handleClick}
          className="w-8 h-8 md:w-10 md:h-10 cursor-pointer rounded-full border bg-[#bcbcbc] border-textsecondary mt-4 md:mt-0"
        >
          <span
            className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#dddddd] border flex items-center justify-center border-textsecondary ${
              isClicked ? "translate-y-[-3px]" : "translate-y-[-5px]"
            }`}
          >
            <KeyboardArrowDownOutlined fontSize="medium" className="md:font-size-large" />
          </span>
        </span>
      </div>
      {isActive && (
        <div className="pl-0 md:pl-10 text-textsecondary text-sm md:text-lg">
          {answer || ""}
        </div>
      )}
    </div>
  );
};
