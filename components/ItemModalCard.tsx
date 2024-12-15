"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import { CartItem, Food, Stay, Travel } from "@/types";
import { ImageCarousel } from "./ImageCarousel";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";

interface ItemCardModalProps {
  type: string;
  vendor: Stay | Travel | Food;
  isOpen: boolean;
  onClose: () => void;
}

export function ItemCardModal({ type, vendor, isOpen, onClose }: ItemCardModalProps) {
  const isStayVendor = (vendor: any): vendor is Stay => type === "stay";
  const isTravelVendor = (vendor: any): vendor is Travel => type === "travel";
  const isFood = (vendor: any): vendor is Food => type === "food";
  const cartContext = useContext(CartContext);
  let item: CartItem | undefined;

  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ isModalOpen: true }, "Modal Open");
    }
    const handlePopState = (event: any) => {
      if (event.state && event.state.isModalOpen) {
        onClose();
      } else {
        onClose();
      }
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        onClose();
        window.history.back();
      }}
    >
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
          {isStayVendor(vendor) &&
            (((item = cartContext.stayItem.find((item) => item.id === vendor.vendorId)) || true) && !item ? (
              <Button
                className="w-full"
                onClick={() => {
                  onClose();
                  cartContext.events.addItemsToCart({ catergory: "stayItem", items: [{ category: "stay", id: vendor.vendorId, name: vendor.name, price: vendor.price }] });
                }}
              >
                Add
              </Button>
            ) : (
              <Button
                className="w-full"
                variant={"destructive"}
                onClick={() => {
                  onClose();
                  cartContext.events.removeItemsFromCart({ removeItemPayload: [{ itemType: "stayItem", itemIds: [vendor.vendorId] }] });
                }}
              >
                Remove
              </Button>
            ))}
          {isTravelVendor(vendor) &&
            (((item = cartContext.travelItem.find((item) => item.id === vendor.vendorId)) || true) && !item ? (
              <Button
                className="w-full"
                onClick={() => {
                  onClose();
                  cartContext.events.addItemsToCart({ catergory: "travelItem", items: [{ category: "travel", id: vendor.vendorId, name: vendor.name, price: vendor.costPerDay }] });
                }}
              >
                Add
              </Button>
            ) : (
              <Button
                className="w-full"
                variant={"destructive"}
                onClick={() => {
                  cartContext.events.removeItemsFromCart({ removeItemPayload: [{ itemType: "travelItem", itemIds: [vendor.vendorId] }] });
                }}
              >
                Remove
              </Button>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
