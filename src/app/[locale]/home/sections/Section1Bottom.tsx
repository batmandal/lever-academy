import { Light, Pencil } from "@/assets/svg";
import { useTranslations } from "next-intl";

export const WhyChooseOurPlatformSection = () => {
  const t = useTranslations("Section1Bottom");

  const data = [
    {
      icon: <Light />,
      title: t("adaptive_testing.title"),
      text: t("adaptive_testing.text"),
    },
    {
      icon: <Pencil />,
      title: t("instant_insights.title"),
      text: t("instant_insights.text"),
    },
    {
      icon: <Light />,
      title: t("progress_tracking.title"),
      text: t("progress_tracking.text"),
    },
    {
      icon: <Light />,
      title: t("global_connectivity.title"),
      text: t("global_connectivity.text"),
    },
  ];

  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-heading"
      className="mt-20 sm:mt-28 lg:mt-32 w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto"
    >
      <h2
        id="why-choose-heading"
        className="font-bold text-textprimary text-3xl sm:text-4xl lg:text-5xl text-center mb-10 sm:mb-14"
      >
        {t("WhyChoose")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-2">
        {data.map((item, index) => (
          <article
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4"
            itemScope
            itemType="https://schema.org/Service"
          >
            <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-full bg-[#f4f7ff] p-3 sm:p-4 flex items-center justify-center shrink-0">
              {item.icon}
            </div>

            <div>
              <h3
                className="font-bold text-lg sm:text-2xl lg:text-3xl text-textprimary mb-2 sm:mb-3"
                itemProp="name"
              >
                {item.title}
              </h3>
              <p
                className="text-textsecondary text-sm sm:text-base lg:text-lg leading-relaxed"
                itemProp="description"
              >
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
