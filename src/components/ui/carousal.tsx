"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Image as SImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

interface CarousalProp {
  items: Carousal[];
}

interface Carousal {
  key: string;
  price: string;
  image: SImage;
  productTitle: string;
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
    <div className=" m-auto">
      <div className="flex justify-center ml-9 items-center w-full">
        <Swiper breakpoints={breakpoints}>
          {items.map((item) => (
            <SwiperSlide key={item.key}>
              <div className="hover:scale-110 duration-300 hover:delay-500 m-4 w-[90%]">
                <Image
                  src={urlForImage(item.image).url()}
                  alt={item.productTitle}
                  width={300}
                  height={350}
                />
                <p className="font-bold font-sora text-xl">
                  {item.productTitle}
                </p>
                <p className="font-bold font-sora text-xl">${item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
