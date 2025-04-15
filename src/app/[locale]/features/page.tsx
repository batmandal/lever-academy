import { useTranslations } from "next-intl";
export const dynamic = "force-static";
const Features = () => {
  const t = useTranslations("Features");

  const featuresList = [
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
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <section className="w-full max-w-5xl text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textprimary leading-tight tracking-tight mb-4">
          {t("mainText")}
        </h1>
        <p className="text-textsecondary text-base sm:text-lg max-w-3xl mx-auto">
          {t("helperText")}
        </p>
      </section>

      <section className="w-full max-w-4xl flex flex-col gap-10 sm:gap-12">
        {featuresList.map((item, index) => (
          <article
            key={index}
            className="flex flex-col gap-3 sm:gap-4 text-start sm:text-left"
          >
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-textprimary">
              {item.title}
            </h2>
            <p className="text-textsecondary text-sm sm:text-base lg:text-lg leading-relaxed">
              {item.text}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Features;
