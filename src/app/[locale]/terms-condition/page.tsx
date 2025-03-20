import { useTranslations } from "next-intl";

const TermsCondition = () => {
  const t = useTranslations("TermsAndConditions");
  // zasvar
  const termsAndConditions = [
    {
      title: t("termOne.title"),
      text: t("termOne.text"),
      note: {
        noteTitle: t("termOne.note.noteTitle"),
        noteText: t("termOne.note.noteText"),
      },
    },
    { title: t("termTwo.title"), text: t("termTwo.text") },
    { title: t("termThree.title"), text: t("termThree.text") },
    { title: t("termFour.title"), text: t("termFour.text") },
    { title: t("termFive.title"), text: t("termFive.text") },
    { title: t("termSix.title"), text: t("termSix.text") },
    { title: t("termSeven.title"), text: t("termSeven.text") },
    { title: t("termEight.title"), text: t("termEight.text") },
    { title: t("termNine.title"), text: t("termNine.text") },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-[40vh] sm:h-[50vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="font-bold text-3xl md:text-4xl">{t("mainText")}</h2>
        <p className="text-textsecondary text-base md:text-lg mb-10 md:mb-14">
          {t("helperText")}
        </p>
      </section>

      {/* Terms Section */}
      <section className="w-full max-w-4xl px-4 sm:px-6 flex flex-col">
        <div className="flex flex-col gap-10 sm:gap-12">
          {termsAndConditions.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl sm:text-3xl">{item.title}</h2>
              <p className="text-textsecondary text-base sm:text-lg">
                {item.text}
              </p>

              {item.note && (
                <div className="flex flex-col sm:flex-row gap-2 pl-4 sm:pl-8 border-l-4 border-gray-300">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {item.note.noteTitle}
                  </h3>
                  <p className="text-textsecondary text-base sm:text-lg">
                    {item.note.noteText}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TermsCondition;
