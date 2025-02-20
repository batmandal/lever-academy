import { Button } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const VisualDemoSection = () => {
  const t = useTranslations("Section2Bottom");

  const ItemsJson = [
    {
      bgColor: "bg-[#ecf1ff]",
      title: t("cardOne.courses"),
      text: t("cardOne.coursesText"),
    },
    {
      bgColor: "bg-[#f9f9f9]",
      title: t("cardTwo.tests"),
      text: t("cardTwo.testsText"),
    },
    {
      bgColor: "bg-[#fff2eb]",
      title: t("cardThree.analytics"),
      text: t("cardThree.analyticsText"),
    },
  ];

  return (
    <div>
      <div className="mb-16 flex flex-col items-center">
        <h2 className="font-bold text-5xl text-textprimary mb-2">
          {t("title")}
        </h2>
      </div>
      <div className="w-full overflow-hidden h-[85vh]">
        <div className="w-fit flex h-full">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="carousel h-full w-fit flex">
              {ItemsJson.map((item, index) => (
                <div
                  key={index}
                  className={`h-full w-[700px] ${item.bgColor} rounded-3xl flex flex-col justify-between p-10 mr-6`}
                >
                  <div className="rounded-2xl overflow-hidden h-1/2">
                    <Image src="/math-teacher.jpg" width={600} height={500} alt="Visual Demo" />
                  </div>
                  <section>
                    <h4 className="font-bold text-textprimary">{item.title}</h4>
                    <p className="text-textsecondary">{item.text}</p>
                  </section>
                  <Button label={t("mainButtontext")} href={"/"} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
