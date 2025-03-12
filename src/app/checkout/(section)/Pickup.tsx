import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios";
import { ArrowRight, Calendar, CalendarClock, MapPin } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/Icon";
import ScheduleTImePopup from "@/components/popups/ScheduleTimePopup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useRestaurant } from "@/context/RestaurantContext";

// interface PickupProps {

// }
const FormValidation = z.object({
  orderType: z.enum(["PICKUP", "DELIVERY"], {
    required_error: "You need to select a order type.",
  }),
  date: z.string(),
  time: z.string(),
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

interface ScheduleTime {
  time: string; // Change to the appropriate type
  date: string; // Change to the appropriate type (e.g., Date, string, etc.)
}

type FormData = z.infer<typeof FormValidation>;
const Pickup = () => {
  const { apiUrl, restaurantID } = useRestaurant();
  const router = useRouter();
  const { cartItems, clearCart } = useCart();
  const [pickup, setPickUp] = useState<string>("Standard");
  const [scheduleTime, setScheduleTime] = useState<ScheduleTime>({
    time: "",
    date: "",
  });
  const [note, setNote] = useState("");
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {},
  });

  const { mutate } = useMutation({
    mutationFn: async (data: FormData) => {
      const res: AxiosResponse<{
        data: {
          _id: string;
        };
      }> = await axios.post(`${apiUrl}/orders`, {
        _idRestaurant: restaurantID,
        orderType: 1,
        description: "Order for " + data.name,
        items: cartItems,
        userDetails: {
          name: data.name,
          email: data.email,
          phone: {
            number: data.phone,
          },
        },
      });

      return res.data.data;
    },
    onSuccess: (data) => {
      toast("Order created successfully");
      // deoxy: uncomment this line
      clearCart();
      router.push("/payment/" + data._id);
    },
    onError: () => {
      toast.error("Please clear your cart and try again");
    },
  });

  const onSubmit = (data: FormData) => {
    toast("Not Implemented");
    return;
    mutate(data);
  };
  return (
    <div>
      <div className="flex w-full flex-col items-start justify-between gap-3 border-b-[2px] border-[#131313] py-3 pb-5">
        <p className="text-xl font-semibold">Pickup Location</p>
        <div className="flex w-full items-center justify-between gap-1 px-1 py-1">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-[#161616] px-4 py-4 text-sm text-[#bc995d]">
              <MapPin />
            </div>
            <div>
              <p className="text-md font-semibold">Bavette Steak House</p>
              <p className="text-sm text-[#666666]">
                49 Allerton Rd, Liverpool L25 7RE{" "}
              </p>
            </div>
          </div>
          <Link href="https://www.google.com/maps/place/Bavette+Steakhouse/@53.3742103,-2.8716884,495m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487b1f31e8b7489b:0xcec4ec7d21dc88df!8m2!3d53.3742071!4d-2.8691135!16s%2Fg%2F11nx3lr3nf?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">
            <p className="rounded-full px-4 py-3 text-sm">
              <ArrowRight />
            </p>
          </Link>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
          <div className="flex w-full flex-col items-start justify-between gap-3 border-b-[2px] border-[#131313] py-3 pb-5">
            <p className="w-full text-xl font-semibold">Pickup Time</p>
            <div className="flex w-full flex-col gap-3 px-1 py-1">
              <div
                className={cn(
                  "flex w-full items-center gap-3 border-[2px] border-[#282828] px-4 py-3 lg:w-2/3",
                  pickup === "Standard" && "border-[#bc995d]",
                )}
                onClick={() => setPickUp("Standard")}
              >
                <Calendar />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Standard</p>
                  <p className="text-[#666666]">10-20 min</p>
                </div>
              </div>
              <ScheduleTImePopup setScheduleTime={setScheduleTime}>
                <div
                  className={cn(
                    "flex w-full items-center gap-3 border-[2px] border-[#282828] px-4 py-3 lg:w-2/3",
                    pickup === "Schedule" && "border-[#bc995d]",
                  )}
                  onClick={() => setPickUp("Schedule")}
                >
                  <CalendarClock />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">Schedule</p>
                    <p className="text-[#666666]">
                      {scheduleTime.date || scheduleTime.time
                        ? `${scheduleTime?.date},${scheduleTime.time} `
                        : "Choose a time"}
                    </p>
                  </div>
                </div>
              </ScheduleTImePopup>
            </div>
            <div className="w-full rounded-lg">
              <div className="z-40 flex w-full flex-col gap-2">
                <Label
                  htmlFor="note"
                  className="flex cursor-pointer items-center gap-2 text-[#FBEAD2]"
                >
                  <Icons.pencil />
                  Add Note
                </Label>
                <Textarea
                  id="note"
                  placeholder="Write your Note here"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="border-none bg-[#0F0F0F] lg:w-4/5"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-b-[2px] border-b-[#131313] pb-7 pt-7">
            <div className="w-full lg:w-2/6">
              <p className="text-lg font-semibold">Contact Details</p>
            </div>
            <div className="flex w-full flex-col gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full lg:w-4/5">
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full lg:w-4/5">
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        {...field}
                        className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full lg:w-4/5">
                    <FormControl>
                      <Input
                        placeholder="Email ID"
                        {...field}
                        className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex w-full flex-col pt-7 lg:w-4/5 lg:flex-row">
            <div className="/6 w-full lg:w-2"></div>
            <Button className="w-full bg-[#bc995d] font-semibold h-11">
              Place Order
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Pickup;
