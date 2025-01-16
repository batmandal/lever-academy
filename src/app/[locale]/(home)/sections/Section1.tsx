"use client";
import { Button } from "@/components";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

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
  const bt = useTranslations("Button");
  return (
    <div
      id="Section1"
      className="Section1 LinearBackground  flex flex-col text-center pt-52 items-center w-full  "
    >
      <h1 className="animation text-[80px] w-[1000px] text-textprimary font-bold">
        {t("maintext")}
      </h1>
      <p className="animation w-[744px]  text-[24px]  text-textsecondary">
        {t("helpertext")}
      </p>
      <div className="animation mb-20 mt-14">
        <Button href="/" label={bt("mainButtontext")} />
      </div>

      <div></div>
    </div>
  );
};
