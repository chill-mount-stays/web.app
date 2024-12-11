import { Headers } from "@/lib/content";
import { StaysEnquiry } from "./StaysEnquiry";
import Image from "next/image";
import { FoodEnquiry } from "./FoodEnquiry";
import { TravelsEnquiry } from "./TravelsEnquiry";

interface PageHeaderProps {
  service: "stays" | "travels" | "food";
}

export default function PageHeader({ service }: PageHeaderProps) {
  const content = Headers.find((header) => header.page === service);
  if (!content) {
    return null;
  }
  return (
    <header className="relative aspect-[2.5/1] rounded-lg overflow-hidden">
      <Image
        src={content.imgUrl}
        alt={`${service} header image`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />{" "}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold text-white">
            {content.title ||
              `Find Your Perfect ${
                service.charAt(0).toUpperCase() + service.slice(1)
              }`}
          </h1>
          <p className="text-lg font-medium text-white">
            {content.description}
          </p>
        </div>
        {service === "stays" && <StaysEnquiry />}
        {service === "travels" && <TravelsEnquiry />}
        {service === "food" && <FoodEnquiry />}
      </div>
    </header>
  );
}
