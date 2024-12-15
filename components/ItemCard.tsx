"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import { ItemCardModal } from "./ItemModalCard";
import { Food, Stay, Travel } from "@/types";

export function ItemCard({ item, type }: { item: Stay | Travel | Food; type: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isStayVendor = (vendor: any): vendor is Stay => type === "stay";
  const isTravelVendor = (vendor: any): vendor is Travel => type === "travel";
  const isFood = (vendor: any): vendor is Food => type === "food";

  return (
    <>
      <Card className="overflow-hidden cursor-pointer transition-shadow hover:shadow-lg w-full max-w-2xl mx-auto" onClick={() => setIsModalOpen(true)}>
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row h-full">
            <div className="relative w-full md:w-2/5 h-48 md:h-auto">
              <Image src={item.imgUrls[0]?.firebaseUrl || "/placeholder.svg"} alt={item.name} layout="fill" objectFit="cover" priority />
            </div>
            <div className="flex flex-col justify-between p-4 md:w-3/5">
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                {item.rating && (
                  <div className="flex items-center mb-2">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{item.rating}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                {isStayVendor(item) && (
                  <div>
                    <p className="text-lg font-bold">₹{item.price}</p>
                    <p className="text-sm text-gray-600">{item.availability ? `${item.roomsAvailable} rooms left` : `Next available: ${item.nextAvailability}`}</p>
                  </div>
                )}
                {isTravelVendor(item) && <p className="text-lg font-bold">₹{item.costPerDay}</p>}
                {isFood(item) && <p className="text-lg font-bold">₹{item.price}</p>}
                {(isTravelVendor(item) || isFood(item)) && <div className="text-sm text-gray-600">{item.availability ? <p className="text-green-600">Available</p> : <p>Next available: {item.nextAvailability}</p>}</div>}
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <ItemCardModal type={type} vendor={item} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
