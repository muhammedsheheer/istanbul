import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] px-4 pt-12 md:px-[50px] lg:pt-20 2xl:px-[100px]">
      <div className="flex flex-col gap-5">
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5 lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-20"
              />
              <Link
                href={""}
                target="_blank"
                className="font-poppins text-center text-lg font-[400] uppercase text-[#CFAC6A] lg:text-xl"
              >
                @istanbulrestaurant
                <br />
                manchester{" "}
              </Link>
            </div>
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center lg:w-[25%]">
              {" "}
            </div>
            <div className="w-full lg:w-[50%]">
              {" "}
              <Image
                src={"/images/home/follow/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>

            <div className="flex w-full items-center justify-center lg:w-[25%]">
              {" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
