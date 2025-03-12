"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";

const Menu = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".title", {
      scrollTrigger: {
        trigger: ".title",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 52,
      duration: 1.5,
    });
    const splitType = document.querySelectorAll(".head");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });

    gsap.to(".menu-description", {
      scrollTrigger: {
        trigger: ".menu-description",
        toggleActions: "restart none none none",
      },
      y: -50,
      duration: 1.5,
    });
    gsap.to(".menu-button", {
      scrollTrigger: {
        trigger: ".menu-button",
        toggleActions: "restart none none none",
      },
      y: -50,
      duration: 1.5,
    });
    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, []);
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 py-20 md:px-[50px] md:py-24 lg:px-[100px] 2xl:px-[140px]">
      <div className="absolute inset-0 z-10 flex justify-center md:top-2">
        <h1
          className="px-4 font-oswald text-7xl font-[400] uppercase md:mt-10 md:block md:text-[22vw]"
          style={{
            background:
              "linear-gradient(180deg, #CCAD64 -14.03%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ISTANBUL
        </h1>
      </div>
      <div className="relative z-50 flex w-full flex-col gap-8 md:flex-row md:gap-4 md:pt-56">
        <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 md:h-[450px] md:w-1/3">
          <Image
            src={"/images/home/image.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-[300px] w-full object-cover lg:h-[450px]"
          />
          <h3 className="font-oswald text-lg font-[700] uppercase tracking-[5px] text-[#CDAE64] md:text-xl">
            meat Platter
          </h3>
        </div>
        <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 md:h-[450px] md:w-1/3">
          <Image
            src={"/images/home/image1.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-[300px] w-full object-cover lg:h-[450px]"
          />
          <h3 className="font-oswald text-lg font-[700] uppercase tracking-[5px] text-[#CDAE64] md:text-xl">
            mocktails{" "}
          </h3>
        </div>
        <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 md:h-[450px] md:w-1/3">
          <Image
            src={"/images/home/image2.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-[300px] w-full object-cover lg:h-[450px]"
          />
          <h3 className="font-oswald text-lg font-[700] uppercase tracking-[5px] text-[#CDAE64] md:text-xl">
            SALADS{" "}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Menu;
