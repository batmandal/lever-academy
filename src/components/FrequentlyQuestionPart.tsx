import { FrequentlyQuestions } from "@/data";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

type FrequentlyQuestionPartType = {
  questionNo: string;
  question: string;
  onClick: () => void;
  isActive: boolean;
};
export const FrequentlyQuestionPart = (props: FrequentlyQuestionPartType) => {
  const { questionNo, question, onClick, isActive } = props;

  return (
    <div className="mb-10  ">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-3">
          <span className="text-xl font-bold">{questionNo}</span>
          <p className="text-xl font-bold">{question}</p>
        </div>
        <span
          onClick={onClick}
          className="w-10 h-10 rounded-full border flex items-center justify-center border-textsecondary"
        >
          <KeyboardArrowDownOutlined fontSize="large" />
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
