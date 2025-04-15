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
        {
          title: t("policyOne.note.noteTitle"),
          text: t("policyOne.note.noteText"),
        },
        {
          title: t("policyOne.note2.noteTitle"),
          text: t("policyOne.note2.noteText"),
        },
        {
          title: t("policyOne.note3.noteTitle"),
          text: t("policyOne.note3.noteText"),
        },
        {
          title: t("policyOne.note4.noteTitle"),
          text: t("policyOne.note4.noteText"),
        },
        {
          title: t("policyOne.note5.noteTitle"),
          text: t("policyOne.note5.noteText"),
        },
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
        {
          title: t("policyThree.note.noteTitle"),
          text: t("policyThree.note.noteText"),
        },
        {
          title: t("policyThree.note2.noteTitle"),
          text: t("policyThree.note2.noteText"),
        },
        {
          title: t("policyThree.note3.noteTitle"),
          text: t("policyThree.note3.noteText"),
        },
      ],
    },
    { title: t("policyFour.title"), text: t("policyFour.text") },
    {
      title: t("policyFive.title"),
      text: t("policyFive.text"),
      notes: [
        {
          title: t("policyFive.note.noteTitle"),
          text: t("policyFive.note.noteText"),
        },
        {
          title: t("policyFive.note2.noteTitle"),
          text: t("policyFive.note2.noteText"),
        },
        {
          title: t("policyFive.note3.noteTitle"),
          text: t("policyFive.note3.noteText"),
        },
        {
          title: t("policyFive.note4.noteTitle"),
          text: t("policyFive.note4.noteText"),
        },
      ],
    },
    { title: t("policySix.title"), text: t("policySix.text") },
    { title: t("policySeven.title"), text: t("policySeven.text") },
    { title: t("policyEight.title"), text: t("policyEight.text") },
    { title: t("policyNine.title"), text: t("policyNine.text") },
    { title: t("policyTen.title"), text: t("policyTen.text") },
  ];

  return (
    <main className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* ✅ Heading Section */}
      <section className="w-full max-w-5xl text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textprimary leading-tight tracking-tight mb-4">
          {t("mainText")}
        </h1>
        <p className="text-textsecondary text-base sm:text-lg max-w-3xl mx-auto">
          {t("helperText")}
        </p>
      </section>

      {/* ✅ Terms Section */}
      <section className="w-full max-w-4xl flex flex-col gap-12 sm:gap-16">
        {termsAndConditions.map((term, index) => (
          <article key={index} className="flex flex-col gap-4 sm:gap-6">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-textprimary">
              {term.title}
            </h2>
            <p className="text-textprimary text-sm sm:text-base lg:text-lg leading-relaxed">
              {term.text}
            </p>

            {term.notes?.map((note, noteIndex) => (
              <div
                key={noteIndex}
                className="pl-4 border-l-4 border-button bg-slate-50 p-4 rounded-md"
              >
                {note.title && (
                  <h3 className="font-semibold text-base sm:text-lg text-textprimary mb-1">
                    {note.title}
                  </h3>
                )}
                <p className="text-textsecondary text-sm sm:text-base leading-relaxed">
                  {note.text}
                </p>
              </div>
            ))}
          </article>
        ))}
      </section>
    </main>
  );
};

export default PrivacyPolicy;
