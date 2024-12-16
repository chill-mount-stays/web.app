"use client";
import React, { useContext, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { DatePicker } from "./DatePicker";
import { CartContext } from "@/context/CartContext";
import { Button } from "./ui/button";
import { Food, Stay, Travel } from "@/types";
import { Home } from "lucide-react";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface ItemModalCardProp {
  vendorType: "stay" | "travel" | "food";
  item: Stay | Travel | Food | undefined;
}
type FormData = Record<string, string | Date>;

const ItemModalForm = ({ vendorType, item }: ItemModalCardProp) => {
  const context = useContext(CartContext);
  const [formData, setFormData] = useState<FormData>({ ...context.customerInfo });
  const updateFormData = (field: string, value: string | Date) => {
    context.events.updateCustomerInfo({ field: field, value: value });
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const customerInfo = context.customerInfo;
  const isStayVendor = (vendor: any): vendor is Stay => vendorType === "stay";
  const isTravelVendor = (vendor: any): vendor is Travel => vendorType === "travel";
  const isFood = (vendor: any): vendor is Food => vendorType === "food";
  const handleSubmit = (data: Record<string, string>) => {
    // Handle stays search logic here
  };
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Book Your Stay</DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground mt-1 mb-1.5">Please fill in the details below to complete your booking.</DialogDescription>
      </DialogHeader>
      <form className="mt-4">
        {vendorType == "stay" && (
          <div className="space-y-4">
            <div className="flex lg:flex-row lg:space-x-6 flex-col space-y-4 lg:space-y-0">
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="text" name="phone" value={customerInfo.phone} placeholder="Phone number" onChange={(e) => updateFormData("phone", e.target.value)} />
              </div>
              <div className="grid w-full max-w-sm  items-center gap-1.5 ">
                <Label htmlFor="guests">Guests</Label>
                <Input id="guests" type="number" name="guests" value={customerInfo.guests} placeholder="No of Guests" onChange={(e) => updateFormData("guests", e.target.value)} />
              </div>
            </div>
            <div className="flex lg:flex-row lg:space-x-6 flex-col space-y-4 lg:space-y-0">
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="checkIn">Check In</Label>
                <DatePicker value={customerInfo.checkIn} onChange={(date) => updateFormData("checkIn", date)} placeholder="Pick Check In Date" />
              </div>
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="checkOut">Check Out</Label>
                <DatePicker value={customerInfo.checkOut} onChange={(date) => updateFormData("checkOut", date)} placeholder="Pick Check Out Date" />
              </div>
            </div>
          </div>
        )}
        {vendorType == "travel" && (
          <div className="space-y-4">
            <div className="flex lg:flex-row lg:space-x-6 flex-col space-y-4 lg:space-y-0">
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="text" name="phone" value={customerInfo.phone} placeholder="Phone number" onChange={(e) => updateFormData("phone", e.target.value)} />
              </div>
              <div className="grid w-full max-w-sm  items-center gap-1.5 ">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" type="text" name="destination" value={customerInfo.destination} placeholder="Destination" onChange={(e) => updateFormData("destination", e.target.value)} />
              </div>
            </div>
            <div className="flex lg:flex-row lg:space-x-6 flex-col space-y-4 lg:space-y-0">
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="pickUp">Pick up</Label>
                <DatePicker value={customerInfo.pickUp} onChange={(date: Date) => updateFormData("pickUp", date)} placeholder="Pick Check In Date" />
              </div>
              <div className="grid w-full max-w-sm  items-center gap-1.5">
                <Label htmlFor="dropDown">Drop down</Label>
                <DatePicker value={customerInfo.dropDown} onChange={(date: Date) => updateFormData("dropDown", date)} placeholder="Pick Check Out Date" />
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
              <div className="h-12 w-12 flex items-center justify-center bg-green-100 rounded-full text-green-600">
                <Home className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">{item?.name}</p>
                <p className="text-sm text-muted-foreground">{isStayVendor(item) || isFood(item) ? `₹${item?.price} per night</p>` : `${item?.costPerDay}`}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between mt-6">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Add to Cart
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ItemModalForm;
