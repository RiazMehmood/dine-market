"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { urlForImage } from "../../../sanity/lib/image";
import { Carousal } from "@/lib/types";

interface CarousalProp {
  items: Carousal[];
}

export default function Carousel({ items }: CarousalProp) {
  const breakpoints = {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <Swiper breakpoints={breakpoints}>
      {items.map((item) => (
        <SwiperSlide key={item.key}>
          <div className="m-4">
            <div>
              <Image
                src={urlForImage(item.image).url()}
                alt={item.productTitle}
                width={300}
                height={350}
              />
              <p className="font-bold font-sora text-xl">{item.productTitle}</p>
              <p className="font-bold font-sora text-xl">${item.price}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
