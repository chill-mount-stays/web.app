"use client";

import { PhoneCall, CalendarIcon, UsersIcon, UtensilsIcon } from "lucide-react";
import React from "react";
import { EnquiryForm } from "./EnquiryForm";

export function FoodEnquiry() {
  const handleSubmit = (data: Record<string, string>) => {
    console.log("Stays search:", data);
    // Handle stays search logic here
  };
  return (
    <EnquiryForm onSubmit={handleSubmit}>
      <EnquiryForm.Field name="phone" label="Phone" placeholder="Phone Number" icon={<PhoneCall className="h-5 w-5" />} />
      <EnquiryForm.Field name="foodDate" label="Date" type="date" placeholder="Pick a date" icon={<CalendarIcon className="h-5 w-5" />} />
    </EnquiryForm>
  );
}
