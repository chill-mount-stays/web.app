"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { banners } from "@/lib/content";

const HomeCarousel = () => {
  return (
    <div className="border border-green-50">
      <Carousel
        className="w-full "
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem
              className="xl:h-[calc(100vh-125px)] relative"
              key={index}
            >
              <div className="p-1 w-full aspect-[16/9] xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
                <Image
                  className="object-center"
                  src={banner.imgUrl}
                  alt={`Banner ${index}`}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  //   loading="lazy"
                  priority={true}
                  quality={100}
                />
                {banner.overlayText ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <h1 className="text-white  md:text-2xl xl:text-4xl text-center">
                      {banner.overlayText}
                    </h1>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
