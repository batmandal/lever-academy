"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { CommentCard } from "../(home)/components";
import { Button } from "@/components";
import { FrequentlyQuestions } from "@/data";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FrequentlyQuestionPart } from "../(home)/components";

const Features = () => {
  const t = useTranslations("Section7");
  const [isQuestionIndex, setIsQuestionIndex] = useState<number | null>(null);
  return (
  <div className="flex flex-col">
    <section className="flex flex-col h-screen gap-y-6 bg-gradient-to-b from-[#E8F0FF] to-[#FFF8E5] items-center justify-center px-4">
      <h1 className="text-8xl font-bold text-center text-textprimary">Key Features Overview<br/>Of Wordcraft AI</h1>
      <p className="text-2xl text-center text-textsecondary">Create SEO-optimized and plagiarism-free content for your blogs,<br/> ads, emails. and website 10X faster,</p>
    </section>
    <section className="flex flex-col h-full py-16 gap-y-16">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-6xl text-center text-textprimary font-bold">Wordcrafts Powerful Features</h2>
        <p className="text-2xl text-center text-textsecondary">Growth-accelerating products for startups, ecommerce stores, angel investors, and more.</p>
      </div>
      <div className="flex justify-center gap-x-24">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-[48px] text-textprimary font-bold">Versatile Writing Styles<br/>In article and Blog</h2>
          <p className="text-xl text-textsecondary">Experience seamless content creation with our versatile writing<br/>styles in articles and blogs. Craft compelling narratives,<br/> informative pieces, or engaging stories effortlessly. Our platform<br/> empowers you to explore various tones, styles, and voices to<br/> suit your brand or personal preferences, ensuring each piece<br/>resonates with your audience.</p>
          <p className="font-semibold text-textprimary text-xl">Defining Our Users Purpose</p>
          <p className="font-semibold text-textprimary text-xl">Driving Innovation In Copywriting</p>
          <Button href="/" label="Learn more" />
        </div>
        <div className="bg-slate-100 rounded-2xl p-8">
          <div className="bg-white rounded-2xl flex flex-col gap-y-4 p-8">
            <div className="flex flex-col border-2 rounded-xl px-8 py-6">
              <h2 className="font-semibold text-xl text-textprimary">Blog post writer</h2>
              <p className="text-textsecondary">csacdacsacdsacdascsdacsacsacsadcsacascdcnsncs</p>
            </div>
            <div className="flex flex-col border-2 rounded-xl px-8 py-6">
              <h2 className="font-semibold text-xl text-textprimary">Blog post writer</h2>
              <p className="text-textsecondary">csacdacsacdsacdascsdacsacsacsadcsacascdcnsncs</p>
            </div>
            <div className="flex flex-col border-2 rounded-xl px-8 py-6">
              <h2 className="font-semibold text-xl text-textprimary">Blog post writer</h2>
              <p className="text-textsecondary">csacdacsacdsacdascsdacsacsacsadcsacascdcnsncs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-24">
        <div className="bg-slate-100 rounded-2xl p-8">
          <div className="bg-white rounded-2xl flex flex-col gap-y-4 p-8">
            <div className="flex flex-col border-2 rounded-xl px-8 py-6">
              <h2 className="font-semibold text-xl text-textprimary">Blog post writer</h2>
              <p className="text-textsecondary">csacdacsacdsacdascsdacsacsacsadcsacascdcnsncs</p>
            </div>
            <div className="flex flex-col border-2 rounded-xl px-8 py-6">
              <h2 className="font-semibold text-xl text-textprimary">Blog post writer</h2>
              <p className="text-textsecondary">csacdacsacdsacdascsdacsacsacsadcsacascdcnsncs</p>
            </div>
            <div className="flex flex-col border-2 rounded-xl px-8 py-6">
              <h2 className="font-semibold text-xl text-textprimary">Blog post writer</h2>
              <p className="text-textsecondary">csacdacsacdsacdascsdacsacsacsadcsacascdcnsncs</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-[48px] text-textprimary font-bold">Versatile Writing Styles<br/>In article and Blog</h2>
          <p className="text-xl text-textsecondary">Experience seamless content creation with our versatile writing<br/>styles in articles and blogs. Craft compelling narratives,<br/> informative pieces, or engaging stories effortlessly. Our platform<br/> empowers you to explore various tones, styles, and voices to<br/> suit your brand or personal preferences, ensuring each piece<br/>resonates with your audience.</p>
          <p className="font-semibold text-textprimary text-xl">Defining Our Users Purpose</p>
          <p className="font-semibold text-textprimary text-xl">Driving Innovation In Copywriting</p>
          <Button href="/" label="Learn more" />
        </div>
      </div>
      <div className="flex justify-center gap-x-24">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-[48px] text-textprimary font-bold">Versatile Writing Styles<br/>In article and Blog</h2>
          <p className="text-xl text-textsecondary">Experience seamless content creation with our versatile writing<br/>styles in articles and blogs. Craft compelling narratives,<br/> informative pieces, or engaging stories effortlessly. Our platform<br/> empowers you to explore various tones, styles, and voices to<br/> suit your brand or personal preferences, ensuring each piece<br/>resonates with your audience.</p>
          <p className="font-semibold text-textprimary text-xl">Defining Our Users Purpose</p>
          <p className="font-semibold text-textprimary text-xl">Driving Innovation In Copywriting</p>
          <Button href="/" label="Learn more" />
        </div>
        <div className="bg-slate-100 rounded-2xl p-8">
          <div className="bg-white rounded-2xl flex flex-col gap-y-4 p-8">
            <div className="flex flex-col border-2 rounded-xl px-8 py-6">
              <h2 className="font-semibold text-xl text-textprimary">Blog post writer</h2>
              <p className="text-textsecondary">csacdacsacdsacdascsdacsacsacsadcsacascdcnsncs</p>
            </div>
            <div className="flex flex-col border-2 rounded-xl px-8 py-6">
              <h2 className="font-semibold text-xl text-textprimary">Blog post writer</h2>
              <p className="text-textsecondary">csacdacsacdsacdascsdacsacsacsadcsacascdcnsncs</p>
            </div>
            <div className="flex flex-col border-2 rounded-xl px-8 py-6">
              <h2 className="font-semibold text-xl text-textprimary">Blog post writer</h2>
              <p className="text-textsecondary">csacdacsacdsacdascsdacsacsacsadcsacascdcnsncs</p>
            </div>
          </div>
        </div>
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
          Growth-accelerating products for startups, ecommerce stores, and
          more.
        </p>
        <div className="w-full overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
      <section className="flex flex-col py-64">
        <h2 className="text-7xl font-bold pl-28">Flexible Pricing Options</h2>
        <div className="flex pt-8">
          <p className="text-textsecondary text-2xl pl-28">Join our pro features for unlimited without any contract and cancel anytime.</p>
          <span></span>
        </div>
        <div className="flex gap-x-16 justify-center py-32">
          <div className="flex flex-col py-12 px-8 bg-slate-100 rounded-3xl">
            <p className="text-xl">FREE PLAN</p>
            <p className="text-textsecondary pt-4">Get exclusive podcasts from your favorite<br/>hosts on here for free.</p>
            <div className="flex">
              <h2 className="text-textprimary font-bold text-4xl">Free</h2>
              <p className="text-xl text-textsecondary pt-3 ">/month</p>
            </div>
            <div className="pt-16">
              <Button href="/" label="Get Started Free"/>
            </div>
            <div className="flex flex-col gap-y-4 pt-8">
              <p className="text-textprimary text-xl">100 Credit (100 words)</p>
              <p className="text-textprimary text-xl">Access to all tools</p>
              <p className="text-textprimary text-xl">API Access Control</p>
              <p className="text-textprimary text-xl">20+ Languages</p>
              <p className="text-textprimary text-xl">Chat Support</p>
            </div>
          </div>
          <div className="flex flex-col py-12 px-8 bg-slate-100 rounded-3xl">
            <p className="text-xl">FREE PLAN</p>
            <p className="text-textsecondary pt-4">Get exclusive podcasts from your favorite<br/>hosts on here for free.</p>
            <div className="flex">
              <h2 className="text-textprimary font-bold text-4xl">Free</h2>
              <p className="text-xl text-textsecondary pt-3 ">/month</p>
            </div>
            <div className="pt-16">
              <Button href="/" label="Get Started Free"/>
            </div>
            <div className="flex flex-col gap-y-4 pt-8">
              <p className="text-textprimary text-xl">100 Credit (100 words)</p>
              <p className="text-textprimary text-xl">Access to all tools</p>
              <p className="text-textprimary text-xl">API Access Control</p>
              <p className="text-textprimary text-xl">20+ Languages</p>
              <p className="text-textprimary text-xl">Chat Support</p>
            </div>
          </div>
          <div className="flex flex-col py-12 px-8 bg-slate-100 rounded-3xl">
            <p className="text-xl">FREE PLAN</p>
            <p className="text-textsecondary pt-4">Get exclusive podcasts from your favorite<br/>hosts on here for free.</p>
            <div className="flex">
              <h2 className="text-textprimary font-bold text-4xl">Free</h2>
              <p className="text-xl text-textsecondary pt-3 ">/month</p>
            </div>
            <div className="pt-16">
              <Button href="/" label="Get Started Free"/>
            </div>
            <div className="flex flex-col gap-y-4 pt-8">
              <p className="text-textprimary text-xl">100 Credit (100 words)</p>
              <p className="text-textprimary text-xl">Access to all tools</p>
              <p className="text-textprimary text-xl">API Access Control</p>
              <p className="text-textprimary text-xl">20+ Languages</p>
              <p className="text-textprimary text-xl">Chat Support</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center">
      <div
      className="w-full flex flex-col justify-center h-screen items-center"
      id="Section7"
    >
      <div className="text-center mb-16">
        <h2 className="text-textprimary text-[56px] font-bold">
          {t("maintext")}
        </h2>
        <p className="text-textsecondary text-[22px]">{t("helpertext")}</p>
      </div>
      <div className="w-[70%]">
        {FrequentlyQuestions.map((items, index) => {
          return (
            <FrequentlyQuestionPart
              onClick={() =>
                setIsQuestionIndex(isQuestionIndex === index ? null : index)
              }
              key={index}
              questionNo={items.questionNo}
              question={items.question}
              isActive={isQuestionIndex === index}
            />
          );
        })}
      </div>
    </div>
      </section>
      <section className="flex justify-center px-4 md:px-16 py-8 md:py-16">
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
  )
};
export default Features;
