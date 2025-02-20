import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("Features");

  const Features = [
    { title: t("featureOne.title"), text: t("featureOne.text") },
    { title: t("featureTwo.title"), text: t("featureTwo.text") },
    { title: t("featureThree.title"), text: t("featureThree.text") },
    { title: t("featureFour.title"), text: t("featureFour.text") },
    { title: t("featureFive.title"), text: t("featureFive.text") },
    { title: t("featureSix.title"), text: t("featureSix.text") },
    { title: t("featureSeven.title"), text: t("featureSeven.text") },
    { title: t("featureEight.title"), text: t("featureEight.text") },
    { title: t("featureNine.title"), text: t("featureNine.text") },
    { title: t("featureTen.title"), text: t("featureTen.text") },
    { title: t("featureEleven.title"), text: t("featureEleven.text") },
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
          {Features.map((item, index) => (
            <div key={index} className="flex flex-col gap-3 sm:gap-4">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">{item.title}</h2>
              <p className="text-textsecondary text-sm sm:text-base lg:text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
