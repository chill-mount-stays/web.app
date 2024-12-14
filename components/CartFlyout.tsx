"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Car, Home, ShoppingBagIcon, Utensils } from "lucide-react";
import { CartContext } from "@/context/CartContext";

export function CartFlyout() {
  const cartContext = React.useContext(CartContext);
  const foodItems = cartContext.foodItems;
  const stayItem = cartContext.stayItem;
  const travelItem = cartContext.travelItem;
  console.log(cartContext.customerInfo);
  console.log(stayItem);
  console.log(travelItem);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="pad-5">
          <ShoppingBagIcon className="pad-5" height={25} width={25} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-10">
          <div>
            <p>Customer data</p>
          </div>
          <div>
            <div className="mx-auto w-full max-w-xl min-h-96 flex flex-col justify-start gap-10">
              <DrawerHeader>
                <DrawerTitle className="text-center">Your Bookings</DrawerTitle>
                <DrawerDescription className="hidden">Food items in cart</DrawerDescription>
              </DrawerHeader>
              <div>
                {stayItem.length ? (
                  <>
                    {stayItem.map((item) => (
                      <div key={item.id} className="border border-green-100 flex items-center p-5 rounded-lg space-x-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full text-green-600">
                          <Home />
                        </div>
                        <div>
                          <p className="text-center">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                        </div>
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
                      <div key={item.id} className="border border-green-100 flex items-center p-5 rounded-lg space-x-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                          <Car />
                        </div>
                        <div>
                          <p className="text-center">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                        </div>
                        {/* <span className="text-center">{item.category === "stay" && item.} Qty</span> */}
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
                      <div key={item.id} className="border border-green-100 flex items-center p-5 rounded-lg space-x-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-600">
                          <Utensils />
                        </div>
                        <div className="flex justify-between space-x-4 items-center w-4/5 ">
                          <div>
                            <p className="text-center">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.category}</p>
                          </div>
                          <div>
                            <p className="text-center">{item.category === "food" && item.itemCount} Qty</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="text-center">No food items in cart</div>
                )}
              </div>
              <DrawerFooter>
                <div className="w-full flex justify-between">
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                  <Button className="bg-cms">Submit</Button>
                </div>
              </DrawerFooter>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
