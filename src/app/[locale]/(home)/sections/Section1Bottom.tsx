import { Light, Pencil } from "@/assets/svg";
import { useTranslations } from "next-intl";

export const WhyChooseOurPlatformSection = () => {
  const t = useTranslations("Section1Bottom");

  const data = [
    {
      icon: <Light />,
      title: t('adaptive_testing.title'),
      text: t('adaptive_testing.text'),
    },
    {
      icon: <Pencil />,
      title: t('instant_insights.title'),
      text: t('instant_insights.text'),
    },
    {
      icon: <Light />,
      title: t('progress_tracking.title'),
      text: t('progress_tracking.text'),
    },
    {
      icon: <Light />,
      title: t('global_connectivity.title'),
      text: t('global_connectivity.text'),
    },
  ];

  return (
    <div className="mt-20 sm:mt-28 lg:mt-32 flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <h2 className="font-bold w-screen px-6 sm:px-6 md:px-10 lg:px-16 text-textprimary text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-14">
        {t('WhyChoose')}
      </h2>

      <section className="w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-6 ">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col px-8 sm:px-8 lg:px-16 items-start">
            <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] mr-4 rounded-full bg-[#f4f7ff] p-3 sm:p-4 flex items-center justify-center">
              {item.icon}
            </div>
            <div className="w-full">
              <p className="font-bold text-lg sm:text-2xl lg:text-3xl text-textprimary mb-2 sm:mb-4">
                {item.title}
              </p>
              <p className="text-textsecondary text-sm sm:text-base lg:text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
