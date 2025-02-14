import { Light, Pencil } from "@/assets/svg";
import { useTranslations } from "next-intl";

export const WhyChooseOurPlatformSection = () => {
  const t = useTranslations("Section1Bottom");

  const data = [
    {
      icon: <Light />,
      title: t('adaptive_testing.title'),   // Removed 'features' from the path
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
    <div className="mt-32 flex flex-col">
      <h2 className="font-bold text-textprimary text-5xl mb-16">
        {t('WhyChoose')}  {/* Adding your translated heading */}
      </h2>
      <section className="flex gap-16">
        <div className="w-full grid grid-cols-2 gap-16">
          {data.map((item, index) => (
            <div key={index} className="flex">
              <div className="w-[68px] h-[68px] mr-4 rounded-full bg-[#f4f7ff] p-4">
                {item.icon}
              </div>
              <div className="w-full h-fit">
                <p className="font-bold text-3xl text-textprimary mb-4">
                  {item.title}
                </p>
                <p className="text-textsecondary text-xl">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
 