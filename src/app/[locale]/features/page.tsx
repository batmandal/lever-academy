import { useTranslations } from "next-intl";



const TermsCondition = () => {

  const t = useTranslations("Features")

  const Features = [
    {
      title: t("featureOne.title"),
      text: t("featureOne.text"),
    },
    {
      title: t("featureTwo.title"),
      text: t("featureTwo.text"),
    },
    {
      title: t("featureThree.title"),
      text: t("featureThree.title"),
    },
    {
      title: t("featureFour.title"),
      text: t("featureFour.text"),
    },
    {
      title: t("featureFive.title"),
      text: t("featureFive.text")  
    },
    {
      title: t("featureSix.title"),
      text: t("featureSix.text"),
    },
    {
      title: t("featureSeven.title"),
      text: t("featureSeven.text"),
    },
    {
      title: t("featureEight.title"),
      text: t("featureEight.text"),
    },
    {
      title: t("featureNine.title"),
      text: t("featureNine.text")
    },
    {
      title: t("featureTen.title"),
      text: t("featureTen.text")
    },
    {
      title: t("featureEleven.title"),
      text: t("featureEleven.text")
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
          {Features.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                <h2 className="font-bold text-4xl">{item.title}</h2>
                <p className="text-textsecondary text-lg">{item.text}</p>
                {/* {item.note ? (
                  <div className="flex pl-[32px] gap-2">
                    <h3 className="whitespace-nowrap font-bold text-lg">
                      {item.note.noteTitle}
                    </h3>
                    <p className="text-textsecondary text-lg">
                      {item.note.noteText}
                    </p>
                  </div>
                ) : null} */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default TermsCondition;
