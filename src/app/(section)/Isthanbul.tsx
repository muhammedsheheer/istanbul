import Image from "next/image";
import React from "react";

const Isthanbul: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 py-12 md:px-[50px] lg:px-[100px] 2xl:px-[160px]">
      <div className="absolute top-10 md:left-[20%]">
        <Image
          src={"/images/home/follow/image.png"}
          width={160}
          height={160}
          alt="logo"
          className="h-[300px] w-full object-cover lg:h-[450px]"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-1 pt-12 md:ml-[20%] md:gap-0 md:pt-28">
        <div
          className="h-[350px] w-5 md:h-[400px] md:w-7"
          style={{
            background:
              "linear-gradient(180deg, #CCAD64 -14.03%, #191616 100%)",
            border: "4px solid transparent",
            borderImage:
              "linear-gradient(180deg, #CCAD64 -14.03%, #191616 100%) 1",
          }}
        />

        <div className="flex flex-col gap-4">
          <h1
            className="px-4 font-oswald text-7xl font-[400] lowercase md:mt-10 md:block md:text-7xl"
            style={{
              background:
                "linear-gradient(180deg, #CCAD64 -14.03%, #191616 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            STANBUL
          </h1>
          <p className="font-inter w-full max-w-[400px] text-base font-[400] italic text-[#FBEAD2] md:ml-5">
            Our Istanbul menu is crafted from a deep passion for Turkish
            flavors, with a focus on authenticity and quality. Every dish
            celebrates the rich culinary heritage of Turkey, prepared by skilled
            chefs who carefully select fresh, local ingredients. We invite you
            to experience the vibrant tastes of Istanbul, where each meal is a
            true labor of love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Isthanbul;
