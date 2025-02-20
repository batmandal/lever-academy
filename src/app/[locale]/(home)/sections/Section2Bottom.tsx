import { Button } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const VisualDemoSection = () => {
  const t = useTranslations("Section2Bottom");

  const ItemsJson = [
    {
      imgSrc: "/ielts.webp",
      bgColor: "bg-[#ecf1ff]",
      title: t("cardOne.courses"),
      text: t("cardOne.coursesText"),
    },
    {
      imgSrc: "/eysh.jpg",
      bgColor: "bg-[#f9f9f9]",
      title: t("cardTwo.tests"),
      text: t("cardTwo.testsText"),
    },
    { 
      imgSrc: "/analyz.jpg",
      bgColor: "bg-[#fff2eb]",
      title: t("cardThree.analytics"),
      text: t("cardThree.analyticsText"),
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="mb-10 sm:mb-16 flex flex-col items-center">
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-textprimary mb-4 text-center">
          {t("title")}
        </h2>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
          {ItemsJson.map((item, index) => (
            <div
              key={index}
              className={`min-w-[280px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] xl:min-w-[700px] ${item.bgColor} rounded-2xl sm:rounded-3xl flex flex-col justify-between p-6 sm:p-8 lg:p-10`}
            >
              <div className="rounded-xl overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                <Image
                  src={item.imgSrc}
                  width={600}
                  height={500}
                  alt="Visual Demo"
                  className="w-full h-full object-cover"
                />
              </div>
              <section className="mt-4">
                <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-textprimary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-textsecondary">
                  {item.text}
                </p>
              </section>
              <div className="mt-4">
                <Button
                  label={t("mainButtontext")}
                  href="https://lever-ed.framer.website/main?fbclid=IwY2xjawIj8etleHRuA2FlbQIxMQABHchsgYhOJtvNfXHzUnPcd2w01ZDsAVguuoXzEHJmc6zQPMzmzjrohdqUNw_aem_e22uclMJLOj9FmA5P-Eh7Q"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
