"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Glimpse = ({}) => {
  const [mouse, setMouse] = useState<string>("");
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitType = document.querySelectorAll(".glimpse-head");
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
    <section className="h-full w-full bg-[#000]">
      <div className="flex flex-col gap-6 md:flex-row md:gap-24">
        <div className="w-full md:w-1/2">
          <Image
            src={"/images/home/experience/bg.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-full w-full"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/2">
          <div className="flex h-full w-full flex-col items-start justify-center gap-4 px-4 md:px-0">
            <h1
              className="px-4 text-start font-oswald text-4xl font-[400] uppercase md:text-5xl"
              style={{
                background:
                  "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Private & <br />
              Group Dining
            </h1>
            <p className="font-manrope ml-3 w-full max-w-[600px] text-base font-[300] tracking-[0.54px] text-[#C1B6A6] md:ml-5">
              Our private and group dining options offer an intimate setting for
              any occasion, from celebrations to business gatherings. Each space
              is designed to provide privacy and comfort, allowing you to enjoy
              every moment with your guests. With personalized service and
              tailored menus, we ensure a seamless and memorable dining
              experience for groups of all sizes.
            </p>
            <Link
              className="ml-3 flex flex-row gap-1 rounded-none bg-transparent px-6 py-4 text-[#fff] ring-1 ring-[#D5A859] hover:bg-[#D5A859] md:ml-5"
              href={"/table-booking"}
            >
              {" "}
              Book now <ArrowRight className="text-[#BC995D]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
