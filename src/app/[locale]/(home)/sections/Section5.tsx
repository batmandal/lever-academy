"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import { CommentCard } from "../components";

export const Section5 = () => {
  const t = useTranslations("Section5");
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-[48px] mb-2 text-textprimary font-bold">
        {t("maintext")}
      </h2>
      <p className="text-[22px] text-textsecondary mb-16">{t("helpertext")}</p>

      <div className="w-full overflow-hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={36}
          className="swiper  "
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 2,
              spaceBetween: 36,
            },
          }}
        >
          <SwiperSlide>
            <CommentCard />
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard />
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard />
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard />
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard />
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
