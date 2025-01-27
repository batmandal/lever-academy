"use client";
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

  return (
    <div className="mb-12  ">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-3 font-bold text-textprimary text-3xl">
          <span>{questionNo}</span>
          <p>{question}</p>
        </div>
        <span
          onClick={handleClick}
          className="w-10 h-10 cursor-pointer rounded-full border bg-[#bcbcbc] border-textsecondary"
        >
          <span
            className={`w-10 h-10 rounded-full bg-[#dddddd] border flex items-center justify-center border-textsecondary ${
              isClicked ? "translate-y-[-3px]" : "translate-y-[-5px]"
            }`}
          >
            <KeyboardArrowDownOutlined fontSize="large" />
          </span>
        </span>
      </div>
      {isActive && (
        <div className="pl-10 text-gray-600 text-base">
          {FrequentlyQuestions.find((item) => item.questionNo === questionNo)
            ?.answer || ""}
        </div>
      )}
    </div>
  );
};
