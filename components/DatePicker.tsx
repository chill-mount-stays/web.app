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
  value?: string | Date;
  placeholder?: string | undefined;
}
export const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(({ onChange, placeholder = "Select date", value }, ref) => {
  const [date, setDate] = React.useState<Date | undefined>(() => {
    if (value) return new Date(value);
    return undefined;
  });
  const [open, setOpen] = React.useState(false);
  const handleFocus = () => {
    setOpen(true);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button ref={ref} variant={"outline"} onFocus={handleFocus} className={cn("max-w-sm w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
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
            setOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
});
