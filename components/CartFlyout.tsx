"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { AlertCircle, Car, Edit3, Home, Minus, PhoneCall, Plus, ShoppingBagIcon, ShoppingCart, Trash2Icon, Utensils } from "lucide-react";
import { CartContext } from "@/context/CartContext";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { formatDetailsForWhatsApp } from "@/app/actions";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CartFlyout() {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [noItemsInCart, setNoItemsInCart] = useState(true);
  const cartContext = React.useContext(CartContext);
  const foodItems = cartContext.foodItems;
  const stayItem = cartContext.stayItem;
  const travelItem = cartContext.travelItem;
  const customerInfo = cartContext.customerInfo;

  let isStayFilled = !customerInfo.checkIn || !customerInfo.checkOut || !customerInfo.guests;
  let isTravelFilled = !customerInfo.destination || !customerInfo.pickUp || !customerInfo.dropDown;
  let isFoodFilled = !customerInfo.foodDate;
  let isPhoneFilled = !customerInfo.phone;
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
    setNoItemsInCart(!(!!foodItems.length || !!stayItem.length || !!travelItem.length));
  }, [cartContext]);

  const handleEnquireNow = () => {
    const formattedMessage = formatDetailsForWhatsApp(customerInfo, stayItem, travelItem, foodItems);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B919842083815&text=${formattedMessage}&app_absent=0&lang=en`;
    window.open(whatsappUrl, "_blank");
    sessionStorage.removeItem("CMS_CartItems");
  };
  useEffect(() => {
    if (isFlyoutOpen) {
      window.history.pushState({ isModalOpen: true }, "Modal Open");
    }
    const handlePopState = (event: any) => {
      if (event.state && event.state.isModalOpen) {
        setIsFlyoutOpen(false);
      } else {
        setIsFlyoutOpen(false);
      }
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isFlyoutOpen]);

  return (
    <Drawer
      open={isFlyoutOpen}
      onClose={() => {
        setIsFlyoutOpen(false);
      }}
    >
      <DrawerTrigger
        onClick={() => {
          setIsFlyoutOpen(true);
        }}
        asChild
      >
        <div className="p-5 bg-cms text-white rounded-full shadow-lg cursor-pointer relative">
          {foodItems.length + stayItem.length + travelItem.length > 0 && <div className="absolute bg-red-800 px-2  rounded-full left-2 top-2 ">{foodItems.length + stayItem.length + travelItem.length}</div>}
          <ShoppingCart height={25} width={25} />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="lg:p-10 p-5 flex flex-col">
          {alert.showAlert ? (
            <Alert variant="destructive" className="max-w-sm  self-end">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>You have some missing details</AlertTitle>
              <AlertDescription>{`${alert.notCompleted.join(", ")} details are missing`}</AlertDescription>
            </Alert>
          ) : (
            <></>
          )}
          <ScrollArea className="mx-auto w-full max-w-xl h-[520px] lg:h-[624px]">
            <div className="flex flex-col space-y-5 lg:space-y-8">
              <DrawerHeader>
                <DrawerTitle className="text-center">Your Details & Bookings</DrawerTitle>
                <DrawerDescription className="hidden">Food items in cart</DrawerDescription>
              </DrawerHeader>
              <div className="flex items-center lg:px-5 space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full text-purple-600">
                  <PhoneCall />
                </div>
                <div className="flex justify-between space-x-4 items-center w-4/5">
                  <p className="">Phone Number</p>
                  {!isPhoneFilled && <p className="text-muted-foreground">{customerInfo.phone}</p>}
                  {isPhoneFilled && (
                    <DrawerClose asChild>
                      <div className="text-gray-500 p-3 rounded-full hover:bg-gray-100">
                        <Edit3 />
                      </div>
                    </DrawerClose>
                  )}
                </div>
              </div>
              {noItemsInCart ? (
                <div className="flex flex-col items-center gap-5">
                  <ShoppingBagIcon height={100} width={100} />
                  <p className="px-5">Your cart is empty</p>
                </div>
              ) : (
                <div>
                  <div>
                    {stayItem.length ? (
                      <div className="lg:px-5">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full text-green-600">
                            <Home />
                          </div>
                          <div className="w-4/5 flex justify-between items-center">
                            <div>
                              <p className="">Stay</p>
                              {!isStayFilled && (
                                <div className="text-xs flex space-x-4">
                                  <p className="">
                                    Check in: <span className="text-muted-foreground">{customerInfo.checkIn}</span>
                                  </p>
                                  <p>
                                    Check out: <span className="text-muted-foreground">{customerInfo.checkOut}</span>
                                  </p>
                                  <p>
                                    Guests: <span className="text-muted-foreground">{customerInfo.guests}</span>
                                  </p>
                                </div>
                              )}
                            </div>
                            {isStayFilled ? (
                              <DrawerClose asChild>
                                <Link href={"/stays"} className="text-gray-500 p-3 rounded-full hover:bg-gray-100">
                                  <Edit3 />
                                </Link>
                              </DrawerClose>
                            ) : (
                              <DrawerClose asChild>
                                <Button
                                  onClick={() => {
                                    cartContext.events.removeItemsFromCart({ removeItemPayload: [{ itemType: "travelItem", itemIds: [stayItem[0].id] }] });
                                  }}
                                  className="text-gray-500 p-3 rounded-full hover:bg-gray-100"
                                >
                                  <Trash2Icon />
                                </Button>
                              </DrawerClose>
                            )}
                          </div>
                        </div>
                        <hr />
                        <div className="py-5 lg:px-10 pl-5">
                          {stayItem.map((item, idx) => (
                            <div key={item.id} className="flex items-center space-x-4">
                              <div>
                                <p className="text-xs text-muted-foreground">{idx + 1}.</p>
                              </div>
                              <div className="flex justify-between space-x-4 items-center w-11/12 ">
                                <p className="">{item.name}</p>
                                <p className="text-[14px]">₹{item.price} per night</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    {travelItem.length ? (
                      <div className="lg:px-5">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                            <Car />
                          </div>
                          <div className="w-4/5 flex justify-between items-center">
                            <div>
                              <p className="">Travel</p>
                              {!isTravelFilled && (
                                <div className="text-xs flex space-x-4">
                                  <p className="">
                                    Pick up: <span className="text-muted-foreground">{customerInfo.pickUp}</span>
                                  </p>
                                  <p>
                                    Drop down: <span className="text-muted-foreground">{customerInfo.dropDown}</span>
                                  </p>
                                  <p>
                                    Destination: <span className="text-muted-foreground">{customerInfo.destination}</span>
                                  </p>
                                </div>
                              )}
                            </div>
                            {isTravelFilled ? (
                              <DrawerClose asChild>
                                <Link href={"/travels"} className="text-gray-500 p-3 rounded-full hover:bg-gray-100">
                                  <Edit3 />
                                </Link>
                              </DrawerClose>
                            ) : (
                              <DrawerClose asChild>
                                <Button
                                  onClick={() => {
                                    cartContext.events.removeItemsFromCart({ removeItemPayload: [{ itemType: "travelItem", itemIds: [travelItem[0].id] }] });
                                  }}
                                  className="text-gray-500 p-3 rounded-full hover:bg-gray-100"
                                >
                                  <Trash2Icon />
                                </Button>
                              </DrawerClose>
                            )}
                          </div>
                        </div>
                        <hr />
                        <div className="py-5 lg:px-10 pl-5">
                          {travelItem.map((item, idx) => (
                            <div key={item.id} className="flex items-center space-x-4">
                              <div>
                                <p className="text-xs text-muted-foreground">{idx + 1}.</p>
                              </div>
                              <div className="flex justify-between space-x-4 items-center w-11/12 ">
                                <p className="">{item.name}</p>
                                <p className="text-[14px]">₹{item.price} per day</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    {foodItems.length ? (
                      <div className="lg:px-5">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-600">
                            <Utensils />
                          </div>
                          <div className="w-4/5 flex justify-between items-center">
                            <div>
                              <p className="">Food</p>
                              {!isFoodFilled && (
                                <div className="text-xs flex space-x-4">
                                  <p className="">
                                    Order Date: <span className="text-muted-foreground">{customerInfo.foodDate}</span>
                                  </p>
                                </div>
                              )}
                            </div>
                            {isFoodFilled && (
                              <DrawerClose asChild>
                                <Link href={"/food"} className="text-gray-500 p-3 rounded-full hover:bg-gray-100">
                                  <Edit3 />
                                </Link>
                              </DrawerClose>
                            )}
                          </div>
                        </div>
                        <hr />
                        <div className="py-5 lg:px-10 pl-5">
                          {foodItems.map((item, idx) => (
                            <div key={item.id} className="flex items-center space-x-4">
                              <div>
                                <p className="text-xs text-muted-foreground">{idx + 1}.</p>
                              </div>
                              <div className="flex justify-between space-x-4 items-center w-11/12 ">
                                <div className="flex space-x-4 items-center">
                                  <p className="">{item.name}</p>
                                  <div className="flex gap-3 items-center justify-center">
                                    <div
                                      className="p-1 bg-gray-100 rounded-md"
                                      onClick={() => {
                                        item?.category === "food" && item?.itemCount - 1 ? cartContext?.events?.updateCount({ itemId: item?.id, count: Number(item?.category === "food" ? item?.itemCount ?? 0 : 0) - 1 }) : cartContext.events.removeItemsFromCart({ removeItemPayload: [{ itemType: "foodItems", itemIds: [item.id] }] });
                                      }}
                                    >
                                      <Minus className="w-4 h-4" />
                                    </div>
                                    <p className="w-full text-center text-sm">{`${item?.category === "food" && item?.itemCount}`}</p>
                                    <div
                                      className="p-1 bg-gray-100 rounded-md"
                                      onClick={() => {
                                        cartContext?.events?.updateCount({ itemId: item?.id, count: Number(item?.category === "food" ? item?.itemCount ?? 0 : 0) + 1 });
                                      }}
                                    >
                                      <Plus className="w-4 h-4" />
                                    </div>
                                  </div>
                                </div>
                                <p className="text-[14px]">₹{item.category === "food" && item.itemCount * item.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <DrawerFooter>
            <div className="w-full flex justify-between">
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
              <button disabled={alert.showAlert} className={cn(`${!alert.showAlert ? "bg-green-500 cursor-pointer" : "bg-green-300 cursor-not-allowed"} hover:bg-green-300 space-x-2 py-2 px-4 lg:px-6 flex items-center rounded-full max-w-fit`)} onClick={handleEnquireNow}>
                <FontAwesomeIcon icon={faWhatsapp} className="text-white lg:w-8 w-6 h-full" />
                <p className=" text-white">WhatsApp us</p>
              </button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
