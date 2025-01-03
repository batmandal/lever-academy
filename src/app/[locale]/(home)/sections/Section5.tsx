"use client";

import { CommentCard } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export const Section5 = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-[48px] mb-2 text-textprimary">
        What Others Are Saying
      </p>
      <p className="text-[21px] text-textsecondary mb-16">
        Growth-accelerating products for startups, ecommerce stores, and more.
      </p>

      <div className="w-full overflow-hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={36}
          className="swiper  "
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
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
