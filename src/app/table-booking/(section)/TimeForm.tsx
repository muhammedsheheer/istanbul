"use client";
import { useEffect, useRef, useState, type FC } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useRestaurant } from "@/context/RestaurantContext";
import type { DayHours, OpenHours } from "@/types/restaurant.type";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { TableFormValues } from "./Table-Validation";
import Link from "next/link";

interface TimeFormProps {
  mainform: UseFormReturn<TableFormValues, undefined>;
  setpage: (value: number | ((page: number) => number)) => void;
}


export const formValidation = z.object({
  guests: z.string().min(1, { message: "Please select number of guests." }),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time." }),
});

export type FormValues = z.infer<typeof formValidation>;

const TimeForm: FC<TimeFormProps> = ({ mainform, setpage }) => {
  const { restaurant } = useRestaurant();

  const form = useForm<FormValues>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      guests: "",
      time: "",
    },
  });
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const timeref = useRef<(HTMLDivElement | null)[]>([]);
  const [disable, setDisable] = useState(false);
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(12);
  const dateValue = form.watch("date");
  function roundToHourIfNeeded(timeString: string) {
    const [hours, minutes] = timeString.split(":").map(Number);

    // Check if minutes are greater than 45, if so, round up
    if (minutes !== undefined && hours !== undefined) {
      if (minutes > 45) {
        return hours + 1;
      }
      return hours;
    }
  }
  useEffect(() => {
    const opening = (restaurant?.openHours as Partial<OpenHours>) ?? {};
    if (dateValue) {
      const day = format(
        new Date(dateValue),
        "EEEE",
      ).toLowerCase() as keyof OpenHours;
      if (day in opening) {
        const hours = (opening[day] as Partial<DayHours>) ?? {};

        const fromTime: string | undefined = hours.timings?.find(
          (item) => item.from,
        )?.from;
        const toTime: string | undefined = hours.timings?.find(
          (item) => item.to,
        )?.to;
        if (toTime) {
          const to = roundToHourIfNeeded(toTime);
          setTo(Number(to));
        }
        if (fromTime) {
          const from = roundToHourIfNeeded(fromTime);
          setFrom(Number(from));
        }
      }
    } else {
      console.log("Date is invalid or undefined");
    }
  }, [dateValue, restaurant?.openHours]);

  const generateTimeSlots = () => {
    const slots = [];

    if (from < to) {
      for (let hour = from; hour < to; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          // if (hour === 23 && minute > 0) break; // Stop after 10:00 PM
          // const period = hour >= 12 ? "PM" : "AM";
          // const displayHour = hour > 12 ? hour - 12 : hour;
          // const time = `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`;
          const time = `${hour}:${minute.toString().padStart(2, "0")}`;
          slots.push(time);
        }
      }
    } else {
      for (let hour = from; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          const time = `${hour}:${minute.toString().padStart(2, "0")}`;
          slots.push(time);
        }
      }
      for (let hour = 0; hour < to; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          const time = `${hour}:${minute.toString().padStart(2, "0")}`;
          slots.push(time);
        }
      }
    }
    return slots;
  };

  const guestNumbers = Array.from({ length: 15 }, (_, i) => i + 1);

  const onSubmit = (data: FormValues) => {
    mainform.setValue('guests', data.guests)
    mainform.setValue('time', data.time)
    mainform.setValue('date', data.date)
    setDisable(true)
    setpage(1);
    window.scrollBy({ top: -350, behavior: "smooth" });
  }


  useEffect(() => {
    const selectedTime = form.watch("time");
    const timeSlots = generateTimeSlots()
    const index = timeSlots.indexOf(selectedTime);

    if (index !== -1 && timeref.current[index]) {
      timeref.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [form.watch("time")]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <p className="text-3xl font-semibold">Book A Table</p>
      <p className="max-w-[700px] text-center">Please note : All online bookings should be sent 24 hours before arrival time . If you have any special requests for your visit please provide information in the message box. </p>
      <p className="max-w-[700px] text-center">Call {' '}<Link href='tel:01617955502' className="text-primary">0161 795 5502</Link>{' '} for bookings more than 15 people , thank you.</p>
      <p className="max-w-[700px] text-center">Booking Notice : we will not be accepting bookings in Ramadan, walk-ins only. thank you.</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center justify-center gap-2"
        >
          <div className="grid w-full grid-cols-1 gap-6 border-b-[2px] border-b-gray-900 py-12 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No of Guests</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 border-muted bg-transparent">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[300px]">
                      {guestNumbers.map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Date</FormLabel>
                  <Popover
                    open={isPopoverOpen}
                    onOpenChange={setIsPopoverOpen}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={`h-12 w-full justify-start border-muted bg-transparent text-left font-normal`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setIsPopoverOpen(false);
                        }}
                        initialFocus
                        fromDate={
                          new Date(new Date().setDate(new Date().getDate()))
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch('date') ?
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 border-muted bg-transparent">
                          <SelectValue
                            placeholder={
                              form.watch("time") ? form.watch("time") : "Select time"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[300px]">
                        {generateTimeSlots().map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              :
              <div></div>
            }
          </div>
          {form.watch('date') &&
            <div className="flex w-full flex-col gap-4 py-12">
              <p>Choose an available time slot:</p>
              <div className="custom-scrollbar grid h-[250px] grid-cols-2 gap-6 overflow-y-scroll md:grid-cols-4 lg:grid-cols-5">
                {generateTimeSlots().map((time, index) => (
                  <div
                    key={time}
                    ref={(el) => { timeref.current[index] = el; }}
                    onClick={() => form.setValue("time", time)}
                    className={cn(
                      "flex h-full w-full cursor-pointer items-center justify-center border-[1px] border-gray-800 py-4",
                      form.watch("time") === time && "border-primary border-[3px]",
                    )}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          }
          <Button
            className="w-fit px-6 py-6 font-semibold"
            disabled={disable}
          >
            Book A Table
          </Button>
        </form>
      </Form>
    </div >
  );
};

export default TimeForm;
