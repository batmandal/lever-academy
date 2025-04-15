"use client";

import { Button } from "@/components";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

export const Section1 = () => {
  const t = useTranslations("Section1");

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

  return (
    <section
      id="Section1"
      className="LinearBackground flex flex-col items-center w-full px-4 sm:px-8 md:px-16 text-center pt-20 sm:pt-28 md:pt-32"
      aria-labelledby="hero-heading"
    >
      <h1
        id="hero-heading"
        className="animation text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight text-textprimary max-w-screen-xl"
      >
        {t("maintext")}
      </h1>

      <p className="animation text-base sm:text-lg md:text-xl lg:text-2xl text-textsecondary mt-4 max-w-3xl">
        {t("helpertext")}
      </p>

      <div className="animation my-8 sm:my-12">
        <Button
          href="https://lever-ed.framer.website/main"
          label={t("mainButtontext")}
        />
      </div>

      <div className="relative flex flex-col sm:flex-row sm:justify-center items-center w-full h-auto sm:h-60 md:h-72 lg:h-80 gap-4">
        <div className="animation absolute bottom-0 z-10">
          <Image
            alt="iPhone app preview"
            src="/iphone1.png"
            width={450}
            height={600}
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px]"
            priority
          />
        </div>

        <Image
          alt="Platform graphic element 1"
          className="animation w-[280px] sm:w-[220px] md:w-[300px] lg:w-[450px] relative"
          src="/graphic.avif"
          width={400}
          height={300}
        />

        <Image
          alt="Platform graphic element 2"
          className="animation w-[280px] sm:w-[220px] md:w-[300px] lg:w-[450px] relative"
          src="/graphic2.avif"
          width={400}
          height={300}
        />
      </div>
    </section>
  );
};
