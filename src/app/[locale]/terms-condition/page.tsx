import { useTranslations } from "next-intl";

const TermsCondition = () => {
  const t = useTranslations("TermsAndConditions");

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
    <main className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ">
      <section className="w-full max-w-5xl text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textprimary leading-tight tracking-tight mb-4">
          {t("mainText")}
        </h1>
        <p className="text-textsecondary text-base sm:text-lg max-w-3xl mx-auto">
          {t("helperText")}
        </p>
      </section>

      <section className="w-full max-w-4xl flex flex-col gap-12 sm:gap-16">
        {termsAndConditions.map((item, index) => (
          <article key={index} className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-textprimary">
              {item.title}
            </h2>
            <p className="text-textsecondary text-base sm:text-lg leading-relaxed">
              {item.text}
            </p>

            {item.note && (
              <div className="bg-slate-50 border-l-4 border-button pl-4 pr-2 py-3 rounded-md">
                <h3 className="font-semibold text-base sm:text-lg text-textprimary mb-1">
                  {item.note.noteTitle}
                </h3>
                <p className="text-textsecondary text-sm sm:text-base leading-relaxed">
                  {item.note.noteText}
                </p>
              </div>
            )}
          </article>
        ))}
      </section>
    </main>
  );
};

export default TermsCondition;
