import { useTranslations } from "next-intl";

const TermsCondition = () => {
  const t = useTranslations("TermsAndConditions")
  const termsAndConditions = [
    {
      title: t("termOne.title"),
      text: t("termOne.text"),
      note: {
        noteTitle: t("termOne.note.noteTitle"),
        noteText:
          t("termOne.note.noteText"),
      },
    },
    {
      title: t("termTwo.title"),
      text: t("termTwo.text"),
    },
    {
      title: t("termThree.title"),
      text: t("termThree.text")
    },
    {
      title: t("termFour.title"),
      text: t("termFour.text"),
    },
    {
      title: t("termFive.title"),
      text: t("termFive.text")
    },
    {
      title: t("termSix.title"),
      text: t("termSix.text")
    },
    {
      title: t("termSeven.title"),
      text: t("termSeven.text"),
    },
    {
      title: t("termEight.title"),
      text: t("termEight.text")
    },
    {
      title: t("termNine.title"),
      text: t("termNine.text"),
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <section className="w-screen h-[50vh] flex flex-col items-center justify-center">
        <h2 className="font-bold text-4xl">{t("mainText")}</h2>
        <p className="text-textsecondary mb-14 text-lg">
          {t("helperText")}
        </p>
      </section>
      <section className="w-[1000px] flex flex-col ">
        <div className="flex flex-col gap-12">
          {termsAndConditions.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                <h2 className="font-bold text-4xl">{item.title}</h2>
                <p className="text-textsecondary text-lg">{item.text}</p>
                {item.note ? (
                  <div className="flex pl-[32px] gap-2">
                    <h3 className="whitespace-nowrap font-bold text-lg">
                      {item.note.noteTitle}
                    </h3>
                    <p className="text-textsecondary text-lg">
                      {item.note.noteText}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default TermsCondition;
