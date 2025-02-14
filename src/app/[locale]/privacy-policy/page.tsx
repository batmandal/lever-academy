import { useTranslations } from "next-intl";

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicy")
  const termsAndConditions = [
    {
      title: t("policyOne.title"),
      text: t("policyOne.text"),
      note: {
        noteTitle: t("policyOne.note.noteTitle"),
        noteText: t("policyOne.note.noteText"),
      },
      note2: {
        noteTitle: t("policyOne.note2.noteTitle"),
        noteText: t("policyOne.note2.noteText")
      },
      note3: {
        noteTitle: t("policyOne.note3.noteTitle"),
        noteText: t("policyOne.note3.noteText")
      },
      note4: {
        noteTitle: t("policyOne.note4.noteTitle"),
        noteText: t("policyOne.note4.noteText")
      },
      note5: {
        noteTitle: t("policyOne.note5.noteTitle"),
        noteText: t("policyOne.note5.noteText")
      },
    },
    {
      title: t("policyTwo.title"),
      text: t("policyTwo.text"),
      note: {
        noteText:
          t("policyTwo.note.noteText"),
      },
      note2: {
        noteText:
          t("policyTwo.note2.noteText"),
      },
      note3: {
        noteText:
          t("policyTwo.note3.noteText"),
      },
      note4: {
        noteText:
          t("policyTwo.note4.noteText"),
      },
      note5: {
        noteText:
          t("policyTwo.note5.noteText"),
      },
      note6: {
        noteText:
        t("policyTwo.note6.noteText"),
      },
    },
    {
      title: t("policyThree.title"),
      text: t("policyThree.text"),
      note: {
        noteTitle: t("policyThree.note.noteTitle"),
        noteText:
          t("policyThree.note.noteText")
      },
      note2: {
        noteTitle: t("policyThree.note.noteTitle"),
        noteText:
          t("policyThree.note2.noteText")
      },
      note3: {
        noteTitle: t("policyThree.note.noteTitle"),
        noteText:
          t("policyThree.note3.noteText")
      },
    },
    {
      title: t("policyFour.title"),
      text: t("policyFour.text")
    },
    {
      title: t("policyFive.title"),
      text: t("policyFive.text"),
      note: {
        noteTitle: t("policyFive.note.noteTitle"),
        noteText:
          t("policyFive.note.noteText")
      },
      note2: {
        noteTitle: t("policyFive.note2.noteTitle"),
        noteText:
          t("policyFive.note2.noteText")
      },
      note3: {
        noteTitle: t("policyFive.note3.noteTitle"),
        noteText:
          t("policyFive.note3.noteText")
      },
      note4: {
        noteTitle: t("policyFive.note4.noteTitle"),
        noteText:
          t("policyFive.note4.noteText")
      },
    },
    {
      title: t("policySix.title"),
      text: t("policySix.text"),
    },
    {
      title: t("policySeven.title"),
      text: t("policySeven.text"),
    },
    {
      title: t("policyEight.title"),
      text: t("policyEight.text"),    
    },
    {
      title: t("policyNine.title"),
      text: t("policyNine.text"),
    },
    {
      title: t("policyTen.title"),
      text: t("policyTen.text"),
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
                <p className="text-textprimary font-semibold text-lg">{item.text}</p>
                {item.note && (
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-bold text-lg">{item.note.noteTitle}</h3>
                    <p className="text-textsecondary text-lg">{item.note.noteText}</p>
                  </div>
                )}
                {item.note2 && (
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-bold text-lg">{item.note2.noteTitle}</h3>
                    <p className="text-textsecondary text-lg">{item.note2.noteText}</p>
                  </div>
                )}
                {item.note3 && (
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-bold text-lg">{item.note3.noteTitle}</h3>
                    <p className="text-textsecondary text-lg">{item.note3.noteText}</p>
                  </div>
                )}
                {item.note4 && (
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-bold text-lg">{item.note4.noteTitle}</h3>
                    <p className="text-textsecondary text-lg">{item.note4.noteText}</p>
                  </div>
                )}
                {item.note5 && (
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-bold text-lg">{item.note5.noteTitle}</h3>
                    <p className="text-textsecondary text-lg">{item.note5.noteText}</p>
                  </div>
                )}
                {item.note6 && (
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-bold text-lg"></h3>
                    <p className="text-textsecondary text-lg">{item.note6.noteText}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default PrivacyPolicy;
