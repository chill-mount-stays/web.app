"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import { Food, Stay, Travel } from "@/types";
import { ImageCarousel } from "./ImageCarousel";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

interface ItemCardModalProps {
  type: string;
  vendor: Stay | Travel | Food;
  isOpen: boolean;
  onClose: () => void;
}

export function ItemCardModal({ type, vendor, isOpen, onClose }: ItemCardModalProps) {
  const router = useRouter();

  const isStayVendor = (vendor: any): vendor is Stay => type === "stay";
  const isTravelVendor = (vendor: any): vendor is Travel => type === "travel";
  const isFood = (vendor: any): vendor is Food => type === "food";
  const cartContext = useContext(CartContext);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{vendor.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <ImageCarousel images={vendor.imgUrls} />
          <div className="grid gap-2">
            {isStayVendor(vendor) && <p className="text-lg font-semibold">${vendor.price} per night</p>}
            {isTravelVendor(vendor) && <p className="text-lg font-semibold">${vendor.costPerDay} per day</p>}
            {isFood(vendor) && <p className="text-lg font-semibold">${vendor.price} per quantity</p>}
            {vendor.rating && (
              <div className="flex items-center">
                <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{vendor.rating}</span>
              </div>
            )}
            <p className="text-gray-600">{vendor.description}</p>
            {isStayVendor(vendor) && <p className="text-sm text-gray-600">{vendor.availability ? `${vendor.roomsAvailable} rooms available` : `Next available: ${vendor.nextAvailability}`}</p>}
          </div>
          {isStayVendor(vendor) && (
            <Button className="w-full" onClick={() => router.push(`/stays/${vendor.vendorId}`)}>
              Edit
            </Button>
          )}
          {isTravelVendor(vendor) && (
            <Button className="w-full" onClick={() => router.push(`/travels/${vendor.vendorId}`)}>
              Edit
            </Button>
          )}
          {isFood(vendor) && (
            <Button
              className="w-full"
              onClick={() => {
                cartContext.events.addItemsToCart({ catergory: "foodItems", items: [{ category: "food", id: vendor.foodId, name: vendor.name, itemCount: 1 }] });
              }}
            >
              Add
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
