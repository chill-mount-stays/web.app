"use client";
import React from "react";
import { EnquiryForm } from "./EnquiryForm";
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";

export function StaysEnquiry() {
  const handleSubmit = (data: Record<string, string>) => {
    console.log("Stays search:", data);
    // Handle stays search logic here
  };

  return (
    <EnquiryForm buttonText="Pre Book" onSubmit={handleSubmit}>
      <EnquiryForm.Field
        name="destination"
        label="Destination"
        placeholder="Where are you going?"
        icon={<MapPinIcon className="h-5 w-5" />}
      />
      <EnquiryForm.Field
        name="checkIn"
        label="Check-in Date"
        type="date"
        icon={<CalendarIcon className="h-5 w-5" />}
      />
      <EnquiryForm.Field
        name="checkOut"
        label="Check-out Date"
        type="date"
        icon={<CalendarIcon className="h-5 w-5" />}
      />
      <EnquiryForm.Field
        name="guests"
        label="Number of Guests"
        type="number"
        placeholder="Guests"
        icon={<UsersIcon className="h-5 w-5" />}
      />
    </EnquiryForm>
  );
}
