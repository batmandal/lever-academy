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
      description:
        t("Courses.text"),
    },
    {
      image: "/background.avif", 
      title: t("Tests.title"),
      description:
        t("Tests.text"),
    },
    {
      image: "/background.avif",
      title: t("Analytics.title"),
      description:
        t("Analytics.text"),
    },
  ];

  return (
    <div className="flex flex-col gap-y-16">
 
      <section className="h-screen gap-y-8 flex flex-col bg-gradient-to-b from-[#E8F0FF] to-[#FFF8E5] justify-center items-center px-4 md:px-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-textprimary text-center">
          <br />
          {t("mainText")}
        </h1>
        <p className="text-center text-lg md:text-xl lg:text-2xl text-textsecondary mb-8">
          {t("helpertext")}
        </p>
      </section>


      <section className="h-full px-4 md:px-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold py-8 md:py-16 text-center md:text-left">
          {t("coursesTests")}
        </h2>
        <div className="w-full h-[500px] md:h-[500px] rounded-3xl overflow-hidden relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true} 
            modules={[Autoplay]}
            className="w-full h-full"
          >
            {slideshowData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-textprimary p-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-center text-base md:text-lg lg:text-xl max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="w-fit mt-6 md:mt-14">
                      <Button href="" label={t("mainButtontext")} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

    
        {/* <div className="bg-slate-50 rounded-xl flex flex-wrap justify-center md:justify-around w-full gap-8 md:gap-x-48 px-4 md:px-16 py-8">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex flex-col gap-y-2 py-4">
                <span className="text-3xl md:text-5xl font-bold text-center">
                  20M+
                </span>
                <p className="text-sm md:text-lg text-center text-textsecondary">
                  Worldwide Users
                </p>
              </div>
            ))}
        </div> */}
      </section>

    
      <section className="h-full flex flex-col justify-center gap-y-8 md:gap-y-16 items-center px-4 md:px-32">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-textprimary font-bold text-center">
          {t("visionAndMission")}
        </h2>

  
        <div className="bg-slate-100 flex flex-wrap md:flex-nowrap gap-6 py-8 md:py-16 px-4 rounded-3xl justify-center items-center h-full w-full">
          <Image
            src="/meeting.avif"
            width={800}
            height={600}
            className="w-full md:w-1/2 rounded-lg"
            alt="Meeting"
          />
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-[44px] text-textprimary font-bold">
              {t("mission.title")}
            </h2>
            <p className="text-textsecondary text-base md:text-lg lg:text-xl">
              {t("mission.text")}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[44px] text-textprimary font-bold">
              {t("vision.title")}
            </h2>
            <p className="text-textsecondary text-base md:text-lg lg:text-xl">
              {t("vision.text")}
            </p>
          </div>
        </div>

      
        <div className="bg-slate-100 flex flex-wrap md:flex-nowrap gap-6 py-8 md:py-16 px-4 rounded-3xl justify-center h-full w-full">
          <div className="flex flex-col gap-y-4 md:gap-y-8 w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-[44px] text-textprimary font-bold">
              {t("Courses.title")}
            </h2>
            <p className="text-textsecondary text-base md:text-lg lg:text-xl">
              {t("Courses.text")}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[44px] text-textprimary font-bold">
              {t("Tests.title")}
            </h2>
            <p className="text-textsecondary text-base md:text-lg lg:text-xl">
              {t("Tests.text")}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[44px] text-textprimary font-bold">
              {t("Analytics.title")}
            </h2>
            <p className="text-textsecondary text-base md:text-lg lg:text-xl">
              {t("Analytics.text")}
            </p>
          </div>
          <Image
            src="/math-teacher.jpg"
            width={800}
            height={600}
            className="w-full md:w-1/2 rounded-3xl"
            alt="Math Teacher"
          />
        </div>
      </section>

 
      <section className="flex flex-col px-4 md:px-16 gap-y-4 justify-center items-center">
        {/* <span className="rounded-full text-indigo-600 text-center font-semibold border-indigo-600 border py-2 px-4 md:px-5 text-sm md:text-base">
          BASED ON 456 REVIEWS ON TRUSTPILOT
        </span> */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-textprimary">
          What Others Are Saying
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-center text-textprimary">
          Growth-accelerating products for students, educators, and more.
        </p>
        <div className="w-full z-0 overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            className="swiper"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 36,
              },
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

      <section className="flex justify-center px-4 md:px-16 py-32 md:py-64">
        <div className="LinearBackground w-full flex py-12 md:py-28 text-center justify-center rounded-3xl">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-textprimary mb-4">
              {t("cardmain")}
            </h1>
            <p className="text-textsecondary text-base md:text-lg lg:text-2xl">
              {t("cardsub")}
            </p>
            <div className="w-fit mt-6 md:mt-14">
              <Button href="" label={t("mainButtontext")} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;