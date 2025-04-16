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
    <div>
      <div className="mb-16 flex flex-col items-center">
        <h2 className="font-bold text-5xl text-textprimary mb-2">
          {t("title")}
        </h2>
      </div>
      <div className="w-full overflow-x-auto md:hidden">
        <div className="flex gap-6 px-4 sm:px-6 lg:px-0 w-fit">
          {ItemsJson.map((item, index) => (
            <div
              key={index}
              className={`min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[650px] xl:min-w-[700px] h-[500px] ${item.bgColor} rounded-3xl flex flex-col justify-between p-6 sm:p-8`}
            >
              <div className="rounded-2xl overflow-hidden h-1/2 mb-4">
                <Image
                  src={item.imgSrc}
                  width={600}
                  height={400}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-xl sm:text-2xl text-textprimary mb-2">
                  {item.title}
                </p>
                <p className="text-textsecondary text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
              <div className="mt-4">
                <Button
                  label={t("mainButtontext")}
                  href="https://lever-ed.framer.website/main"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full overflow-hidden h-[85vh] hidden md:block">
        <div className="w-fit flex h-full">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="carousel h-full w-fit flex">
              {ItemsJson.map((item, index) => (
                <div
                  key={index}
                  className={`h-full w-[700px] ${item.bgColor} rounded-3xl flex flex-col justify-between p-10 mr-6`}
                >
                  <div className="rounded-2xl overflow-hidden h-1/2 ">
                    <Image
                      src={item.imgSrc}
                      width={600}
                      height={500}
                      alt="Visual Demo"
                      className="object-cover w-full"
                    />
                  </div>
                  <section>
                    <p className="font-bold text-textprimary">{item.title}</p>
                    <p className="text-textsecondary">{item.text}</p>
                  </section>
                  <Button
                    label={t("mainButtontext")}
                    href={
                      "https://lever-ed.framer.website/main?fbclid=IwY2xjawIj8etleHRuA2FlbQIxMQABHchsgYhOJtvNfXHzUnPcd2w01ZDsAVguuoXzEHJmc6zQPMzmzjrohdqUNw_aem_e22uclMJLOj9FmA5P-Eh7Q"
                    }
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
