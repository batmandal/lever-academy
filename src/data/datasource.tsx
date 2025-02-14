import { useTranslations } from "next-intl";

type FAQItem = {
  questionNoKey: string;
  questionKey: string;
  answerKey: string;
};

export const FrequentlyQuestions = (): FAQItem[] => {
  const t = useTranslations("Section7");

  return [
    {
      questionNoKey: t("question1.questionNo"),
      questionKey: t("question1.question"),
      answerKey: t("question1.answer"),
    },
    {
      questionNoKey: t("question2.questionNo"),
      questionKey: t("question2.question"),
      answerKey: t("question2.answer"),
    },
    {
      questionNoKey: t("question3.questionNo"),
      questionKey: t("question3.question"),
      answerKey: t("question3.answer"),
    },
    {
      questionNoKey: t("question4.questionNo"),
      questionKey: t("question4.question"),
      answerKey: t("question4.answer"),
    },
    {
      questionNoKey: t("question5.questionNo"),
      questionKey: t("question5.question"),
      answerKey: t("question5.answer"),
    },
    {
      questionNoKey: t("question6.questionNo"),
      questionKey: t("question6.question"),
      answerKey: t("question6.answer"),
    },
  ];
};
