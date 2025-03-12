'use client'
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import { useEffect } from "react";


const PrivateAndGroupDining = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.dining-title', {
            scrollTrigger: {
                trigger: ".dining-title",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            x: 52,
            duration: 1.5

        })
        const splitType = document.querySelectorAll(".dining-head")
        splitType.forEach((char, i) => {
            if (char instanceof HTMLElement) {
                const text = new SplitType(char, { types: "chars" })
                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false
                    },
                    opacity: 0.2,
                    stagger: 0.2
                })
            }
        })

        gsap.to('.dining-description', {
            scrollTrigger: {
                trigger: ".dining-description",
                toggleActions: "restart none none none"
            },
            y: -10,
            duration: 2
        }
        )

        gsap.to('.dining-button', {
            scrollTrigger: {
                trigger: ".dining-button",
                toggleActions: "restart none none none"
            },
            y: -10,
            stagger: 1.5,
            duration: 1.5
        }
        )
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
    }, [])
    return (
        <section className="flex h-screen w-full items-center justify-center px-4 pt-12 lg:pt-20 lg:px-10" id='dining'>
            <div className="relative flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row rounded-3xl"
                style={{
                    backgroundImage: `url('/images/home/private_group.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
                <div className="flex h-full w-full flex-col items-start justify-center gap-[2.5rem] p-6 lg:px-32 z-20">
                    <h3 className="dining-title font-oswald uppercase -ml-[50px]">Booking</h3>
                    <h1 className="dining-head max-w-[500px] font-oswald font-bold text-6xl sm:text-7xl md:text-start">
                        Private &<br />
                        Group Dining
                    </h1>
                    <p className="hidden dining-description md:flex max-w-[500px] font-light leading-[160%] text-white md:text-start mt-[10px]">
                        Our private and group dining options offer an intimate setting for any occasion, from celebrations to business gatherings. Each space is designed to provide privacy and comfort, allowing you to enjoy every moment with your guests. With personalized service and tailored menus, we ensure a seamless and memorable dining experience for groups of all sizes.
                    </p>
                    <Link href='/table-booking'>
                        <Button className="dining-button flex items-center font-extrabold font-oswald justify-center gap-3 px-6 py-7 rounded-none bg-white text-black mt-[10px]">Book Now <MoveRight className="text-primary" /></Button>
                    </Link>
                </div >
            </div >
        </section >
    );
};

export default PrivateAndGroupDining;