"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { CommentCard } from "../(home)/components";
import { Button } from "@/components";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <section className="h-screen gap-y-8 flex flex-col bg-gradient-to-b from-[#E8F0FF] to-[#FFF8E5] justify-center items-center px-4 md:px-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-textprimary text-center">
          Crafting Content With<br />Wordcraft AI
        </h1>
        <p className="text-center text-lg md:text-xl lg:text-2xl text-textsecondary mb-8">
          Create SEO-optimized and plagiarism-free content for your blogs,
          <br className="hidden md:block" /> ads, emails, and website 10X faster.
        </p>
      </section>
      <section className="h-full px-4 md:px-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold py-8 md:py-16 text-center md:text-left">
          Experience The Transformative<br />
          Capabilities Of - Crafting Content<br />
          With Wordcraft AI
        </h2>
        <div className="LinearBackground w-full flex py-12 md:py-28 text-center justify-center rounded-3xl px-4">
          <div className="flex flex-col items-center ">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-textprimary mb-4">
              Optimize Your Content<br />From Today
            </h1>
            <p className="text-textsecondary text-base md:text-lg lg:text-2xl">
              Growth-accelerating products for startups, ecommerce stores, and
              more.
            </p>
            <div className="w-fit mt-6 md:mt-14">
              <Button href="" label="Get Started Free" />
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-xl flex flex-wrap justify-center md:justify-around w-full gap-8 md:gap-x-48 px-4 md:px-16 py-8">
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
        </div>
      </section>
      <section className="h-full flex flex-col justify-center gap-y-8 md:gap-y-16 items-center px-4 md:px-32">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-textprimary font-bold text-center">
          Our Mission And Values
        </h2>
        <div className="bg-slate-100 flex flex-wrap md:flex-nowrap gap-6 py-8 md:py-16 px-4 rounded-3xl justify-center h-full w-full">
          <img
            src="/meeting.avif"
            className="w-full md:w-1/2 rounded-lg"
            alt="Meeting"
          />
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-[44px] text-textprimary font-bold">
              Putting Users at the Core of<br />Our Mission
            </h2>
            <p className="text-textsecondary text-base md:text-lg lg:text-xl">
              At Wordcraft, Our mission is to redefine the landscape of
              content creation by harnessing the transformative power of
              artificial intelligence. We are committed to fostering creativity.
            </p>
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              <span className="font-semibold text-base md:text-lg">
                Defining Our Users Purpose
              </span>
              <span className="font-semibold text-base md:text-lg">
                Driving Innovation In Copywriting
              </span>
              <span className="font-semibold text-base md:text-lg">
                Empowering Creativity Through AI
              </span>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 flex flex-wrap md:flex-nowrap gap-6 py-8 md:py-16 px-4 rounded-3xl justify-center h-full w-full">
          <div className="flex flex-col gap-y-4 md:gap-y-8 w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-[44px] text-textprimary font-bold">
              Putting Users at the Core of<br />Our Mission
            </h2>
            <p className="text-textsecondary text-base md:text-lg lg:text-xl">
              At Wordcraft, Our mission is to redefine the landscape of
              content creation by harnessing the transformative power of
              artificial intelligence. We are committed to fostering creativity.
            </p>
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              <span className="font-semibold text-base md:text-lg">
                Defining Our Users Purpose
              </span>
              <span className="font-semibold text-base md:text-lg">
                Driving Innovation In Copywriting
              </span>
              <span className="font-semibold text-base md:text-lg">
                Empowering Creativity Through AI
              </span>
            </div>
          </div>
          <img
            src="/math-teacher.jpg"
            className="w-full md:w-1/2 rounded-3xl"
            alt="Math Teacher"
          />
        </div>
      </section>
      <section className="flex flex-col px-4 md:px-16 gap-y-4 justify-center items-center">
        <span className="rounded-full text-indigo-600 text-center font-semibold border-indigo-600 border py-2 px-4 md:px-5 text-sm md:text-base">
          BASED ON 456 REVIEWS ON TRUSTPILOT
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-textprimary">
          What Others Are Saying
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-center text-textprimary">
          Growth-accelerating products for startups, ecommerce stores, and more.
        </p>
        <div className="w-full overflow-hidden">
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
              Optimize Your Content<br />From Today
            </h1>
            <p className="text-textsecondary text-base md:text-lg lg:text-2xl">
              Growth-accelerating products for startups, ecommerce stores, and
              more.
            </p>
            <div className="w-fit mt-6 md:mt-14">
              <Button href="" label="Get Started Free" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
