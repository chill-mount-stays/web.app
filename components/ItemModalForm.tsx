"use client";
import React, { useContext, useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { DatePicker } from "./DatePicker";
import { CartContext } from "@/context/CartContext";
import { Button } from "./ui/button";
import { Food, Stay, Travel } from "@/types";
import { Car, Home } from "lucide-react";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface ItemModalCardProp {
  vendorType: "stay" | "travel" | "food";
  item: Stay | Travel | Food | undefined;
  onClose: () => void;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}
type FormData = Record<string, string | Date>;

const ItemModalForm = ({ vendorType, item, onClose, setShowForm }: ItemModalCardProp) => {
  const context = useContext(CartContext);
  const [formData, setFormData] = useState<FormData>({ ...context.customerInfo });
  const updateFormData = (field: string, value: string) => {
    context.events.updateCustomerInfo({ field: field, value: value });
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const customerInfo = context.customerInfo;
  const isStayVendor = (vendor: any): vendor is Stay => vendorType === "stay";
  const isTravelVendor = (vendor: any): vendor is Travel => vendorType === "travel";
  const isFood = (vendor: any): vendor is Food => vendorType === "food";

  const phoneRef = useRef<HTMLInputElement | null>(null);
  const checkInRef = useRef<HTMLButtonElement>(null);
  const checkOutRef = useRef<HTMLButtonElement>(null);
  const pickUpRef = useRef<HTMLButtonElement>(null);
  const dropDownRef = useRef<HTMLButtonElement>(null);
  const guestsRef = useRef<HTMLInputElement | null>(null);
  const destinationRef = useRef<HTMLInputElement | null>(null);

  const handleAddToCart = () => {
    if (isStayVendor(item)) {
      if (!customerInfo.checkIn || !customerInfo.checkOut || !customerInfo.phone || !customerInfo.guests) {
        if (!customerInfo.phone) {
          phoneRef.current?.focus();
          return;
        }
        if (!customerInfo.guests) {
          guestsRef.current?.focus();
          return;
        }
        if (!customerInfo.checkIn) {
          checkInRef.current?.focus();
          return;
        }

        if (!customerInfo.checkOut) {
          checkOutRef.current?.focus();
          return;
        }
      } else {
        context.events.addItemsToCart({ catergory: "stayItem", items: [{ category: "stay", id: item.vendorId, name: item.name, price: item.price }] });
        onClose();
      }
    } else if (isTravelVendor(item)) {
      if (!customerInfo.pickUp || !customerInfo.dropDown || !customerInfo.destination || !customerInfo.phone) {
        if (!customerInfo.phone) {
          phoneRef.current?.focus();
          return;
        }
        if (!customerInfo.destination) {
          destinationRef.current?.focus();
          return;
        }
        if (!customerInfo.pickUp) {
          pickUpRef.current?.focus();
          console.log("pickup ref");
          return;
        }

        if (!customerInfo.dropDown) {
          dropDownRef.current?.focus();
          return;
        }
      } else {
        context.events.addItemsToCart({ catergory: "travelItem", items: [{ category: "travel", id: item.vendorId, name: item.name, price: item.costPerDay }] });
        onClose();
      }
    }
  };
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Book Your Stay</DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground mt-1 mb-1.5">Please fill in the details below to complete your booking.</DialogDescription>
      </DialogHeader>
      <div className="mt-4">
        {vendorType == "stay" && (
          <div className="space-y-4">
            <div className="flex lg:flex-row lg:space-x-6 flex-col space-y-4 lg:space-y-0">
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input ref={phoneRef} id="phone" type="text" name="phone" value={customerInfo.phone} placeholder="Phone number" onChange={(e) => updateFormData("phone", e.target.value)} />
              </div>
              <div className="grid w-full max-w-sm  items-center gap-1.5 ">
                <Label htmlFor="guests">Guests</Label>
                <Input ref={guestsRef} id="guests" type="number" name="guests" value={customerInfo.guests} placeholder="No of Guests" onChange={(e) => updateFormData("guests", e.target.value)} />
              </div>
            </div>
            <div className="flex lg:flex-row lg:space-x-6 flex-col space-y-4 lg:space-y-0">
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="checkIn">Check In</Label>
                <DatePicker ref={checkInRef} value={customerInfo.checkIn} onChange={(date) => updateFormData("checkIn", date.toISOString())} placeholder="Pick Check In Date" />
              </div>
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="checkOut">Check Out</Label>
                <DatePicker ref={checkOutRef} value={customerInfo.checkOut} onChange={(date) => updateFormData("checkOut", date.toISOString())} placeholder="Pick Check Out Date" />
              </div>
            </div>
          </div>
        )}
        {vendorType == "travel" && (
          <div className="space-y-4">
            <div className="flex lg:flex-row lg:space-x-6 flex-col space-y-4 lg:space-y-0">
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input ref={phoneRef} id="phone" type="text" name="phone" value={customerInfo.phone} placeholder="Phone number" onChange={(e) => updateFormData("phone", e.target.value)} />
              </div>
              <div className="grid w-full max-w-sm  items-center gap-1.5 ">
                <Label htmlFor="destination">Destination</Label>
                <Input ref={destinationRef} id="destination" type="text" name="destination" value={customerInfo.destination} placeholder="Destination" onChange={(e) => updateFormData("destination", e.target.value)} />
              </div>
            </div>
            <div className="flex lg:flex-row lg:space-x-6 flex-col space-y-4 lg:space-y-0">
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="pickUp">Pick up</Label>
                <DatePicker ref={pickUpRef} value={customerInfo.pickUp} onChange={(date: Date) => updateFormData("pickUp", date.toISOString())} placeholder="Select Pick Up Date" />
              </div>
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="dropDown">Drop down</Label>
                <DatePicker ref={dropDownRef} value={customerInfo.dropDown} onChange={(date: Date) => updateFormData("dropDown", date.toISOString())} placeholder="Select Drop Down Date" />
              </div>
            </div>
          </div>
        )}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Selected Item</CardTitle>
            <CardDescription>Review your booking details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className={`h-12 w-12 flex items-center justify-center rounded-full  ${vendorType === "stay" ? "bg-green-100 text-green-600" : vendorType === "travel" ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}>
                {vendorType === "stay" && <Home className="h-6 w-6" />}
                {vendorType === "travel" && <Car className="h-6 w-6" />}
              </div>
              <div>
                <p className="font-medium">{item?.name}</p>
                <p className="text-sm text-muted-foreground">{isStayVendor(item) || isFood(item) ? `₹${item?.price} per night` : `₹${item?.costPerDay} per day`}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between mt-6">
          <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
            Cancel
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemModalForm;
