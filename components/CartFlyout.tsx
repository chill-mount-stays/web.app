"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { AlertCircle, Car, Home, ShoppingBagIcon, Utensils } from "lucide-react";
import { CartContext } from "@/context/CartContext";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function CartFlyout() {
  const cartContext = React.useContext(CartContext);
  const foodItems = cartContext.foodItems;
  const stayItem = cartContext.stayItem;
  const travelItem = cartContext.travelItem;
  const customerInfo = cartContext.customerInfo;
  const showAlert = () => {
    const notCompleted = [];
    let showAlert = false;
    if (!customerInfo.phone && notCompleted.push("Phone Number")) showAlert = true;
    if (foodItems.length && !customerInfo.foodDate && notCompleted.push("Food")) showAlert = true;
    if (stayItem.length && !customerInfo.checkIn && !customerInfo.checkOut && !customerInfo.guests && notCompleted.push("Stay")) showAlert = true;
    if (travelItem.length && !customerInfo.destination && !customerInfo.pickUp && !customerInfo.dropDown && notCompleted.push("Travel")) showAlert = true;
    return { showAlert, notCompleted };
  };
  let alert = showAlert();
  React.useEffect(() => {
    alert = showAlert();
  }, [cartContext]);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="pad-5">
          <ShoppingBagIcon className="pad-5" height={25} width={25} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-10 flex flex-col lg:gap-5">
          {alert.showAlert ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>You have some missing details</AlertTitle>
              <AlertDescription>{`${alert.notCompleted.join(", ")} details are missing`}</AlertDescription>
            </Alert>
          ) : (
            <></>
          )}
          {/* <div>
            <p>{`Phone No : ${customerInfo.phone}`}</p>
            {stayItem.length ? (
              <div>
                <p>Hotel details</p>
                <p>{`Check In : ${customerInfo.checkIn}`}</p>
                <p>{`Check Out : ${customerInfo.checkOut}`}</p>
                <p>{`No. of Gustes : ${customerInfo.guests}`}</p>
              </div>
            ) : (
              <></>
            )}
            {travelItem.length ? (
              <div>
                <p>Travel details</p>
                <p>{`Pick up time : ${customerInfo.pickUp}`}</p>
                <p>{`Destination : ${customerInfo.destination}`}</p>
              </div>
            ) : (
              <></>
            )}
            {foodItems.length ? (
              <div>
                <p>Food details</p>
                <p>{`Food date : ${customerInfo.foodDate}`}</p>
              </div>
            ) : (
              <></>
            )}
          </div> */}
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
                          <p className="text-xs text-muted-foreground">{item.price}</p>
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
                          <p className="text-xs text-muted-foreground">{item.price}</p>
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
                            <p className="text-xs text-muted-foreground">{item.price}</p>
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
            </div>
          </div>
          <DrawerFooter>
            <div className="w-full flex justify-between">
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
              <Button disabled={alert.showAlert} className="bg-cms">
                Submit
              </Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
