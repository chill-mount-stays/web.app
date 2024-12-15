"use client";

import { PhoneCall, CalendarIcon, UsersIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { EnquiryForm } from "./EnquiryForm";

export function TravelsEnquiry() {
  const handleSubmit = (data: Record<string, string>) => {
    // Handle stays search logic here
  };
  return (
    <EnquiryForm onSubmit={handleSubmit}>
      <EnquiryForm.Field name="phone" label="Phone" placeholder="Phone Number" icon={<PhoneCall className="h-5 w-5" />} />
      <EnquiryForm.Field name="pickUp" label="Pick-up Date" type="date" icon={<CalendarIcon className="h-5 w-5" />} />
      <EnquiryForm.Field name="dropDown" label="Drop-down Date" type="date" icon={<CalendarIcon className="h-5 w-5" />} />
      <EnquiryForm.Field name="destination" label="Destination" type="text" placeholder="Destination" icon={<MapPinIcon className="h-5 w-5" />} />
    </EnquiryForm>
  );
}
