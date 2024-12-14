"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ShoppingBagIcon } from "lucide-react";
import { CartContext } from "@/context/CartContext";

export function CartFlyout() {
  const cartContext = React.useContext(CartContext);
  const foodItems = cartContext.foodItems;
  const stayItem = cartContext.stayItem;
  const travelItem = cartContext.travelItem;
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="pad-5">
          <ShoppingBagIcon className="pad-5" height={25} width={25} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm min-h-96 flex flex-col justify-between">
          <DrawerHeader>
            <DrawerTitle>Items in cart</DrawerTitle>
            <DrawerDescription className="hidden">Food items in cart</DrawerDescription>
          </DrawerHeader>
          <div>
            {stayItem.length ? (
              <>
                {stayItem.map((item) => (
                  <div key={item.id} className="grid grid-cols-2">
                    <span className="text-center">{item.name}</span>
                    {/* <span className="text-center">{item.category === "stay" && item.} Qty</span> */}
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center">No Stays selected</div>
            )}
          </div>
          <div>
            {travelItem.length ? (
              <>
                {travelItem.map((item) => (
                  <div key={item.id} className="grid grid-cols-2">
                    <span className="text-center">{item.name}</span>
                    {/* <span className="text-center">{item.category === "food" && item.itemCount} Qty</span> */}
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center">No Travels selected</div>
            )}
          </div>
          <div>
            {foodItems.length ? (
              <>
                {foodItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-2">
                    <span className="text-center">{item.name}</span>
                    <span className="text-center">{item.category === "food" && item.itemCount} Qty</span>
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center">No food items in cart</div>
            )}
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
