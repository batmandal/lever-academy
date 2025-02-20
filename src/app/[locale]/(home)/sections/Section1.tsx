"use client";
import { Button } from "@/components";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

export const Section1 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".animation", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".animation",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const t = useTranslations("Section1");

  return (
    <div
      id="Section1"
      className="Section1 LinearBackground flex flex-col text-center pt-20 sm:pt-28 md:pt-32 items-center w-full h-fit"
    >
      <p className="animation text-3xl sm:text-5xl md:text-6xl lg:text-[80px] w-[90%] sm:w-[80%] md:w-[700px] lg:w-[1000px] text-textprimary font-bold leading-tight">
        {t("maintext")}
      </p>

      <p className="animation w-[90%] sm:w-[80%] md:w-[600px] lg:w-[744px] text-base sm:text-lg md:text-xl lg:text-2xl text-textsecondary mt-4">
        {t("helpertext")}
      </p>

      <div className="animation my-8 sm:my-12">
        <Button href="https://lever-ed.framer.website/main?fbclid=IwY2xjawIj8etleHRuA2FlbQIxMQABHchsgYhOJtvNfXHzUnPcd2w01ZDsAVguuoXzEHJmc6zQPMzmzjrohdqUNw_aem_e22uclMJLOj9FmA5P-Eh7Q" label={t("mainButtontext")} />
      </div>

      <div className="relative w-full flex flex-col sm:flex-row sm:justify-center items-center h-auto sm:h-60 md:h-72 lg:h-80">
        <div className="animation absolute bottom-0 z-10 ">
          <Image alt="iPhone" src="/iphone1.png" width={450} height={600} className="relative w-[700px] sm:w-[600px] md:w-[700px] lg:w-[800px]" />
        </div>

        <Image
          alt="Graphic 1"
          className="animation relative w-[400px] sm:w-[300px] md:w-[400px] lg:w-[400px]"
          src="/graphic.avif"
          width={400}
          height={300}
        />
        <Image
          alt="Graphic 2"
          className="animation relative w-[400px] sm:w-[220px] md:w-[400px] lg:w-[400px]"
          src="/graphic2.avif"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};
