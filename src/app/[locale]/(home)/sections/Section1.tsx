"use client";
import { Button } from "@/components";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export const Section1 = () => {
  useEffect(() => {
    // ScrollTrigger-г GSAP-д бүртгэх
    gsap.registerPlugin(ScrollTrigger);

    // Хөдөлгөөн үүсгэх
    gsap.from(".animation", {
      y: 50, // Доороос гарч ирэх
      opacity: 0, // Эхлэх үед харагдахгүй
      duration: 1, // Хугацаа (секундээр)
      stagger: 0.3, // Дараалалтай хөдөлгөөн (0.3 секундийн хоцролт)
      scrollTrigger: {
        trigger: ".animation", // Хөдөлгөөнийг идэвхжүүлэх элемент
        start: "top 80%", // Хөдөлгөөн эхлэх цэг
        toggleActions: "play none none none", // Үйлдлүүд
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
        <Button onClick={() => {}} label={bt("mainButtontext")} />
      </div>

      <div></div>
    </div>
  );
};
