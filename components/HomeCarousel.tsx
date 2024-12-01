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

const HomeCarousel = () => {
  const banners = [
    {
      bannerId: 1,
      imgUrl:
        "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp",
    },
    {
      bannerId: 2,
      imgUrl:
        "https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/ooty-1653923879_ee32f7707d19c1d542af.webp",
    },
    {
      bannerId: 3,
      imgUrl:
        "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp",
    },
  ];
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
            <CarouselItem key={index}>
              <div className="p-1 lg:h-[640px] md:[]">
                <Image
                  src={banner.imgUrl}
                  alt={`Banner ${index}`}
                  fill={true}
                  style={{ objectFit: "fill" }}
                  //   loading="lazy"
                  priority={true}
                  quality={100}
                />
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
