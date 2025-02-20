import { useTranslations } from "next-intl";


interface Note {
  title?: string;
  text: string;
}

interface Term {
  title: string;
  text: string;
  notes?: Note[]; 
}

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicy");

  const termsAndConditions: Term[] = [
    {
      title: t("policyOne.title"),
      text: t("policyOne.text"),
      notes: [
        { title: t("policyOne.note.noteTitle"), text: t("policyOne.note.noteText") },
        { title: t("policyOne.note2.noteTitle"), text: t("policyOne.note2.noteText") },
        { title: t("policyOne.note3.noteTitle"), text: t("policyOne.note3.noteText") },
        { title: t("policyOne.note4.noteTitle"), text: t("policyOne.note4.noteText") },
        { title: t("policyOne.note5.noteTitle"), text: t("policyOne.note5.noteText") },
      ],
    },
    {
      title: t("policyTwo.title"),
      text: t("policyTwo.text"),
      notes: [
        { text: t("policyTwo.note.noteText") },
        { text: t("policyTwo.note2.noteText") },
        { text: t("policyTwo.note3.noteText") },
        { text: t("policyTwo.note4.noteText") },
        { text: t("policyTwo.note5.noteText") },
        { text: t("policyTwo.note6.noteText") },
      ],
    },
    {
      title: t("policyThree.title"),
      text: t("policyThree.text"),
      notes: [
        { title: t("policyThree.note.noteTitle"), text: t("policyThree.note.noteText") },
        { title: t("policyThree.note2.noteTitle"), text: t("policyThree.note2.noteText") },
        { title: t("policyThree.note3.noteTitle"), text: t("policyThree.note3.noteText") },
      ],
    },
    { title: t("policyFour.title"), text: t("policyFour.text") },
    {
      title: t("policyFive.title"),
      text: t("policyFive.text"),
      notes: [
        { title: t("policyFive.note.noteTitle"), text: t("policyFive.note.noteText") },
        { title: t("policyFive.note2.noteTitle"), text: t("policyFive.note2.noteText") },
        { title: t("policyFive.note3.noteTitle"), text: t("policyFive.note3.noteText") },
        { title: t("policyFive.note4.noteTitle"), text: t("policyFive.note4.noteText") },
      ],
    },
    { title: t("policySix.title"), text: t("policySix.text") },
    { title: t("policySeven.title"), text: t("policySeven.text") },
    { title: t("policyEight.title"), text: t("policyEight.text") },
    { title: t("policyNine.title"), text: t("policyNine.text") },
    { title: t("policyTen.title"), text: t("policyTen.text") },
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-5xl h-[40vh] sm:h-[50vh] flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">{t("mainText")}</h2>
        <p className="text-textsecondary mb-10 sm:mb-14 text-base sm:text-lg max-w-3xl">
          {t("helperText")}
        </p>
      </section>

      <section className="w-full max-w-4xl">
        <div className="flex flex-col gap-10 sm:gap-12">
          {termsAndConditions.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 sm:gap-8">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">{item.title}</h2>
              <p className="text-textprimary font-semibold text-sm sm:text-base lg:text-lg leading-relaxed">
                {item.text}
              </p>

              {item.notes?.map((note, noteIndex) => (
                <div key={noteIndex} className="flex flex-col items-start gap-2 sm:gap-3">
                  {note.title && (
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg">{note.title}</h3>
                  )}
                  <p className="text-textsecondary text-sm sm:text-base lg:text-lg leading-relaxed">
                    {note.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
