"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import { Food, Stay, Travel } from "@/types";
import { ImageCarousel } from "./ImageCarousel";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext, CartItem } from "@/context/CartContext";

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
  let item: CartItem | undefined;
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
          {isStayVendor(vendor) &&
            (((item = cartContext.stayItem.find((item) => item.id === vendor.vendorId)) || true) && !item ? (
              <Button
                className="w-full"
                onClick={() => {
                  cartContext.events.addItemsToCart({ catergory: "stayItem", items: [{ category: "stay", id: vendor.vendorId, name: vendor.name, price: vendor.price }] });
                }}
              >
                Add
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={() => {
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
                  cartContext.events.addItemsToCart({ catergory: "travelItem", items: [{ category: "travel", id: vendor.vendorId, name: vendor.name, price: vendor.costPerDay }] });
                }}
              >
                Add
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={() => {
                  cartContext.events.removeItemsFromCart({ removeItemPayload: [{ itemType: "stayItem", itemIds: [vendor.vendorId] }] });
                }}
              >
                Remove
              </Button>
            ))}
          {isFood(vendor) &&
            (((item = cartContext.foodItems.find((item) => item.id === vendor.foodId)) || true) && !item ? (
              <Button
                className="w-full"
                onClick={() => {
                  cartContext.events.addItemsToCart({ catergory: "foodItems", items: [{ category: "food", id: vendor.foodId, name: vendor.name, itemCount: 1, price: vendor.price }] });
                }}
              >
                Add
              </Button>
            ) : (
              <div className="flex flex-col md:grid grid-cols-3 gap-5">
                <Button
                  className="w-full col-span-2 bg-red-600"
                  onClick={() => {
                    cartContext.events.removeItemsFromCart({ removeItemPayload: [{ itemType: "foodItems", itemIds: [vendor.foodId] }] });
                  }}
                >
                  Remove
                </Button>
                <div className="flex gap-3 items-center justify-center">
                  <Button
                    onClick={() => {
                      cartContext?.events?.updateCount({ itemId: vendor?.foodId, count: Number(item?.category === "food" ? item?.itemCount ?? 0 : 0) + 1 });
                    }}
                  >
                    +
                  </Button>
                  <span className="w-full text-center">{`${item?.category === "food" && item?.itemCount} qty`}</span>
                  <Button
                    onClick={() => {
                      item?.category === "food" && item?.itemCount - 1 ? cartContext?.events?.updateCount({ itemId: vendor?.foodId, count: Number(item?.category === "food" ? item?.itemCount ?? 0 : 0) - 1 }) : cartContext.events.removeItemsFromCart({ removeItemPayload: [{ itemType: "foodItems", itemIds: [vendor.foodId] }] });
                    }}
                  >
                    -
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
