"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({ }) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070707]">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <h3 className="font-oswald uppercase italic">Special</h3>
        <h1 className="max-w-[600px] text-center font-oswald text-5xl sm:text-7xl">
          Istanbul Specials
        </h1>
        <p className="max-w-[500px] px-2 text-center font-light leading-[160%] text-[#C1B6A6] md:px-0">
          We bring the finest cuts of beef to Istanbul with a commitment to quality and sustainability. Embracing the city`s vibrant culinary heritage, each dish reflects our dedication to responsible sourcing. Experience dining that honors both our guests and the environment.
        </p>
        {modelData && (
          <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
            <EmblaCarousel slides={modelData} options={OPTIONS} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Special;
