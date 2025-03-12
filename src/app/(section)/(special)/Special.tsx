"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(max-width:690px)", () => {
      gsap.to(".special-description", {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none",
        },
        x: 0,
      });
    });

    mm.add("(min-width:691px)", () => {
      gsap.to(".special-description", {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none",
        },
        x: 30,
        duration: 2,
      });
    });

    gsap.to(".special-title", {
      scrollTrigger: {
        trigger: ".special-title",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 30,
      duration: 1.5,
    });

    const splitType = document.querySelectorAll(".special-head");
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
    <section className="relative flex h-full w-full justify-center bg-[#070707] pb-12 pt-12 md:pb-16 md:pt-32">
      <div className="absolute left-[20%] top-[25%]">
        <h1
          className="hidden px-4 font-oswald text-4xl font-[400] uppercase md:block md:text-5xl"
          style={{
            background: "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ISTANBUL <br /> Signature <br /> SPECIALS
        </h1>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 py-12">
        <h1
          className="px-4 text-center font-oswald text-4xl font-[400] uppercase md:hidden md:text-5xl"
          style={{
            background: "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          INSTANBUL Signature SPECIALS
        </h1>
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
