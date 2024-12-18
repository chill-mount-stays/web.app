"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
interface DatePickerProps {
  onChange: (date: Date, bool: boolean) => void;
  value?: string | Date;
  placeholder?: string | undefined;
  isDateFilled?: boolean;
  onDateSelect?: () => void;
}
export const DatePicker = ({ onChange, placeholder = "Select date", value, isDateFilled = true, onDateSelect }: DatePickerProps) => {
  const [date, setDate] = React.useState<Date | undefined>(() => {
    if (value) return new Date(value);
    return undefined;
  });
  const [openDP, setOpenDP] = React.useState(true);

  return (
    <div>
      <Popover open={openDP} onOpenChange={setOpenDP}>
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
              setOpenDP(false);
              if (date) onChange(date, true);
              if (onDateSelect) onDateSelect();
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {!isDateFilled && <p className="text-xs text-red-500">please fill the date</p>}
    </div>
  );
};
