"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { CommentCard } from "../(home)/components";
import { Button } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutUs = () => {
  const t = useTranslations("AboutUs");

  const slideshowData = [
    {
      image: "/background.avif",
      title: t("Courses.title"),
      description: t("Courses.text"),
    },
    {
      image: "/background.avif",
      title: t("Tests.title"),
      description: t("Tests.text"),
    },
    {
      image: "/background.avif",
      title: t("Analytics.title"),
      description: t("Analytics.text"),
    },
  ];

  return (
    <div className="flex flex-col gap-y-16">
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#E8F0FF] to-[#FFF8E5] px-4 md:px-16 gap-y-6 md:gap-y-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-textprimary leading-tight tracking-tight max-w-4xl">
          <br />
          {t("mainText")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-textsecondary max-w-2xl">
          {t("helpertext")}
        </p>
      </section>

      <section className="h-full px-4 md:px-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold py-8 md:py-16 text-center md:text-left">
          {t("coursesTests")}
        </h2>

        <div className="w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            modules={[Autoplay]}
            className="w-full h-full"
          >
            {slideshowData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-white bg-opacity-40 flex flex-col items-center justify-center text-textprimary p-4 text-center">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="w-fit mt-6 md:mt-14">
                      <Button href="/courses" label={t("mainButtontext")} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="h-full flex flex-col gap-y-8 md:gap-y-16 items-center px-4 md:px-32">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-textprimary font-bold text-center">
          {t("visionAndMission")}
        </h2>

        <div className="bg-slate-100 flex flex-wrap md:flex-nowrap gap-6 py-8 md:py-16 px-4 rounded-3xl items-center w-full">
          <Image
            src="/meeting.avif"
            width={800}
            height={600}
            className="w-full md:w-1/2 rounded-lg"
            alt="Team meeting"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <h3 className="text-2xl md:text-3xl lg:text-[44px] font-bold text-textprimary">
              {t("mission.title")}
            </h3>
            <p className="text-textsecondary text-base md:text-lg lg:text-xl">
              {t("mission.text")}
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-[44px] font-bold text-textprimary">
              {t("vision.title")}
            </h3>
            <p className="text-textsecondary text-base md:text-lg lg:text-xl">
              {t("vision.text")}
            </p>
          </div>
        </div>

        <div className="bg-slate-100 flex flex-wrap md:flex-nowrap gap-6 py-8 md:py-16 px-4 rounded-3xl items-center w-full">
          <div className="flex flex-col gap-y-4 md:gap-y-8 w-full md:w-1/2">
            {["Courses", "Tests", "Analytics"].map((key) => (
              <div key={key}>
                <h3 className="text-2xl md:text-3xl lg:text-[44px] font-bold text-textprimary">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-textsecondary text-base md:text-lg lg:text-xl">
                  {t(`${key}.text`)}
                </p>
              </div>
            ))}
          </div>
          <Image
            src="/math-teacher.jpg"
            width={800}
            height={600}
            className="w-full md:w-1/2 rounded-3xl"
            alt="Math teacher"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="flex flex-col px-4 md:px-16 gap-y-4 items-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textprimary">
          {t("testimonials", { default: "What Others Are Saying" })}
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-textprimary max-w-xl">
          {t("testimonialsSub", {
            default:
              "Growth-accelerating products for students, educators, and more.",
          })}
        </p>

        <div className="w-full z-0 overflow-hidden mt-6">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            className="swiper"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <CommentCard />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>

      <section className="flex justify-center px-4 md:px-16 py-16 md:py-32 lg:py-64">
        <div className="LinearBackground w-full flex py-12 md:py-28 text-center justify-center rounded-3xl">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-textprimary mb-4 max-w-4xl">
              {t("cardmain")}
            </h2>
            <p className="text-textsecondary text-base md:text-lg lg:text-2xl max-w-2xl">
              {t("cardsub")}
            </p>
            <div className="w-fit mt-6 md:mt-14">
              <Button href="/register" label={t("mainButtontext")} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
