"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
interface DatePickerProps {
  onChange: (date: Date) => void;
  value: string | Date;
  placeholder: string | undefined;
  //   checkIn: Date | undefined;
  //   isFormReset: boolean;
}
export function DatePicker({ onChange, placeholder, value }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(() => {
    if (value instanceof Date) {
      return value;
    }
    const parsedDate = new Date(value);
    return isNaN(parsedDate.getTime()) ? undefined : parsedDate;
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className={cn("max-w-sm w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date);
            if (date) onChange(date);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
