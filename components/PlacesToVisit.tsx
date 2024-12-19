"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { bestPlaces } from "@/lib/content";
import BestPlaceCard from "./BestPlaceCard";
import { useRouter } from "next/navigation";

export const PlacesToVisit = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center lg:gap-20 gap-10 font-poppins">
      <p className="text-center lg:text-4xl font-medium text-xl ">Best Places to Visit</p>
      <div className="flex flex-col gap-5 justify-around lg:flex-row xl:gap-10 w-full lg:px-0 px-8">
        {bestPlaces.slice(0, 3).map((image, index) => {
          return (
            <motion.div className="w-full" key={index} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} viewport={{ once: true, amount: 0.8 }} initial={{ opacity: 0, y: 20 * index, scale: 1 }} whileInView={{ y: 0, opacity: 1 }}>
              <BestPlaceCard key={index} imageUrl={image.imageUrl} altText={image.altText} title={image.title} description={image.description} />
            </motion.div>
          );
        })}
      </div>
      <Button className=" bg-cms hover:bg-green-600" onClick={() => router.push("/best-places")}>
        View More
      </Button>
    </div>
  );
};
