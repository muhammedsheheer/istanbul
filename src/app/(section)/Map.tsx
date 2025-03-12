'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Map = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.branches-underline', {
            scrollTrigger: {
                trigger: ".branches-underline",
                toggleActions: "restart none none none"
            },
            scale: 1,
            duration: 1.5
        })
    }, [])
    return (
        <section id="welcome" className="flex w-full items-center justify-center overflow-hidden">
            <div className="relative flex flex-col gap-4 h-fit lg:min-h-[60vh]  w-full  items-center justify-center px-4 lg:px-0 py-12 lg:py-24">
                <div className="w-full flex">
                    {/* <Image
                        src="/images/home/map/map.png"
                        width={1462}
                        height={597}
                        alt="map"
                    />
                    <Button className="hidden absolute rounded-full lg:flex flex-col h-fit lg:top-1/3 lg:left-1/2 px-2 py-2 lg:px-7 lg:py-7"><span>Get<br />Direction<br /></span> <ArrowUpRight /></Button> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9489.98276496501!2d-2.2501794230760743!3d53.51320360832858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1db64a19b53%3A0x614d0e8514d9a215!2sIstanbul%20Restaurant%20Manchester!5e0!3m2!1sen!2sin!4v1731926511514!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[500px] grayscale invert hover:grayscale hover:invert"
                    ></iframe>
                </div>
                <div className="w-full max-w-[1300px] px-3 md:px-0 flex flex-col gap-9 py-12 md:py-24">
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                        <p className="w-full text-center font-oswald text-3xl md:text-5xl">
                            Our Other{' '}<span className="text-primary">Branches</span>
                        </p>
                        <Image
                            src='/images/underline.png'
                            width={840}
                            height={85}
                            alt="underline"
                            className="branches-underline w-60"
                            style={{
                                transform: "scale(0.5)"
                            }}
                        />
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2 py-6 md:px-24 flex flex-col gap-6">
                            <p className="w-full font-oswald text-3xl text-center">Istanbul Restaurant Withington</p>
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-center">455 Wilmslow Rd, Withington,<br /> Manchester M20 4AN, United Kingdom</p>
                                    <Link href='https://maps.app.goo.gl/fNnP3wMjzsUQTnDj8' target="_blank" className="underline">Get direction</Link>
                                </div>
                                <div className="w-full flex gap-2 justify-center">
                                    <p className="font-semibold">Phone :</p>
                                    <Link href='tel:+441615266562' target="_blank">+441615266562</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-6 md:px-24 flex flex-col gap-6">
                            <p className="w-full font-oswald text-3xl text-center">Istanbul Restaurant Blackburn</p>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-center">Unit 1 Nab Ln, Blackburn BB2 1LN,<br /> United Kingdom</p>
                                    <Link href='https://maps.app.goo.gl/M3ugZudBQLzDzSiUA' target="_blank" className="underline">Get direction</Link>
                                </div>
                                <div className="w-full flex gap-2 justify-center">
                                    <p className="font-semibold">Phone :</p>
                                    <Link href='tel:+441254241298'>+441254241298</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;