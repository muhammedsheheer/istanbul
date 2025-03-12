"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const Experience = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".experience-title", {
      scrollTrigger: {
        trigger: ".experience-title",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 52,
      duration: 1.5,
    });
    const splitType = document.querySelectorAll(".head-experience");
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

    gsap.to(".experience-description", {
      scrollTrigger: {
        trigger: ".experience-description",
        toggleActions: "restart none none none",
      },
      y: -10,
      duration: 2,
    });

    gsap.to(".experience-container", {
      scrollTrigger: {
        trigger: ".experience-container",
        toggleActions: "restart none none none",
      },
      x: 50,
      stagger: 1.5,
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
    <section className="relative h-full w-full bg-[#111] px-4 py-12 md:px-24 md:py-20">
      <div className="flex flex-col gap-12 md:gap-20">
        <div>
          <h2 className="text-center font-oswald text-4xl font-[400] capitalize text-[#FBEAD2] md:text-6xl">
            UNFORGETTABLE EXPERIENCE
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <div className="flex w-full flex-col gap-4 px-6 md:w-1/3 md:px-0">
            <div className="relative">
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16">
                <h1
                  className="text-center font-oswald text-4xl font-[700] uppercase md:text-5xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FOOD
                </h1>
              </div>
              <Image
                src={"/images/home/experience/image1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full md:h-full"
              />
            </div>
            <p className="font-roboto text-sm font-[400] tracking-[0.54px] text-[#FBEAD2] md:text-base">
              Istanbul Restaurant was born from a passion for bringing authentic
              Turkish flavors to your table. With a commitment to tradition,
              quality, and fresh ingredients, every dish is a labor of love,
              crafted to deliver a true taste of Turkey
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 px-6 md:w-1/3 md:px-0">
            <div className="relative">
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16">
                <h1
                  className="text-center font-oswald text-4xl font-[700] uppercase md:text-5xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  DRINKS{" "}
                </h1>
              </div>
              <Image
                src={"/images/home/experience/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full md:h-full"
              />
            </div>
            <p className="font-roboto text-sm font-[400] tracking-[0.54px] text-[#FBEAD2] md:text-base">
              Our drinks are crafted with the same passion and dedication as our
              cuisine. From refreshing traditional Turkish beverages to expertly
              mixed cocktails, every sip is a celebration of quality,
              authenticity, and flavor
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 px-6 md:w-1/3 md:px-0">
            <div className="relative">
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16">
                <h1
                  className="text-center font-oswald text-4xl font-[700] uppercase md:text-5xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ATMOSPHERE{" "}
                </h1>
              </div>
              <Image
                src={"/images/home/experience/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full md:h-full"
              />
            </div>
            <p className="font-roboto text-sm font-[400] tracking-[0.54px] text-[#FBEAD2] md:text-base">
              At Istanbul, we’ve created more than just a dining space—we’ve
              crafted an experience. Surrounded by warm ambiance, elegant décor,
              and the inviting aroma of authentic Turkish cuisine, every visit
              feels like a journey through the heart of Istanbul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
