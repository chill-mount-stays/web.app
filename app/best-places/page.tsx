import BestPlaceCard from "@/components/BestPlaceCard";
import { bestPlaces } from "@/lib/content";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full lg:px-8 px-4 lg:mb-24 mb-8">
      <div className="lg:my-12 my-6">
        <p className="lg:text-6xl text-2xl font-medium text-center">Best Places to Visit in Ooty</p>
        <p className="lg:text-xl text-xs text-center text-muted-foreground lg:mt-2 mt-0">Your Guide to Ooty's Must-Visit Attractions</p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4">
        {bestPlaces.map((image, index) => (
          <BestPlaceCard key={index} imageUrl={image.imageUrl} altText={image.altText} title={image.title} description={image.description} />
        ))}
      </div>
    </div>
  );
};

export default page;
