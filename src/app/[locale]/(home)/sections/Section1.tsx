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
      className="Section1 LinearBackground  flex flex-col text-center pt-32 items-center w-full h-fit "
    >
      <p className="animation text-[80px] w-[1000px] text-textprimary font-bold leading-tight">
        {t("maintext")}
      </p>
      <p className="animation w-[744px]  text-[24px] text-textsecondary">
        {t("helpertext")}
      </p>
      <div className="animation mb-40 mt-14">
        <Button href="/" label={t("mainButtontext")} />
      </div>

      <div className="relative w-full flex justify-center  h-52">
        <div className="animation absolute bottom-0 z-10">
          <div className="w-[800px]">
            <Image alt="" src="/iphone1.png"/>
          </div>
        </div>
        <div className="flex absolute bottom-0 gap-4">
          <Image alt="" className="animation" src="/graphic.avif" />
          <Image alt="" className="animation" src="/graphic2.avif" />
        </div>
      </div>
    </div>
  );
};
