import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ResponsiveImageCardProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
}

export default function BestPlaceCard({ imageUrl, altText, title, description }: ResponsiveImageCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden">
      <div className="relative w-full h-64 sm:h-72">
        <Image src={imageUrl} alt={altText} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 640px" />
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-4 sm:p-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
}
