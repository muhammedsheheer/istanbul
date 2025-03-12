"use client";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = ({}) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".head-container", 1.5, {
      y: 50,
      opacity: 1,
      ease: "power4.out",
    })
      .from(".head-hero", 1, {
        x: 160,
        opacity: 0,
        delay: -0.5,
      })
      .from(".hero-button", 1, {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: -0.5,
      });
  }, []);
  return (
    <section
      id="hero"
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="relative flex h-screen w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/video/home/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="z-40 flex h-full w-full items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-7">
            <h1
              className="text-center font-oswald text-4xl font-[400] tracking-[8px] sm:text-5xl md:text-8xl"
              style={{
                background:
                  "linear-gradient(194deg, #CDAE64 50.51%, #050504 117.48%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              WELCOME <br />
              TO INSTANBUL
            </h1>
            <div className="ml-[2%] flex flex-col items-center justify-center gap-3">
              <Link href="/menu">
                <Button className="hero-button flex items-center justify-center gap-3 rounded-none px-7 py-7 uppercase">
                  Order now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
