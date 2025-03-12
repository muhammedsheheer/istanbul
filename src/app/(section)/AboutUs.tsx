import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutUs = ({ }) => {
    return (
        <section className="relative w-full flex flex-col h-full items-center justify-center rounded-t-3xl bg-[#3d3933] overflow-hidden">
            <div className="flex h-full flex-col items-center justify-center gap-4  md:flex-row py-20 max-w-[1300px]">
                <div className="relative h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0"
                    style={{
                        backgroundImage: "url('/images/home/vector.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}

                >
                    <Image
                        src="/images/home/Group.png"
                        width={190}
                        height={191}
                        alt="group"
                        className="absolute right-5 lg:right-0 -top-3 lg:top-5 w-4/12 rounded-lg"
                    />
                    <Image
                        src="/images/home/side-close-up.png"
                        width={948}
                        height={880}
                        alt="side-close-up"
                        className="h-auto w-full rounded-lg md:rounded-none"
                    />
                </div>
                <div className="flex h-full w-full flex-col  gap-3 lg:gap-[2rem] p-6 md:w-1/2 items-start lg:ml-24 overflow-hidden">
                    <h3 className="font-oswald uppercase text-[#fbead2]">About Us</h3>
                    <h1 className="max-w-[500px] text-[#fff4e3] font-oswald font-bold leading-[52.2px] text-5xl sm:text-6xl text-start">
                        Passionately<br />
                        Crafted,Perfectly<br />
                        Served
                    </h1>
                    <p className="max-w-[450px] font-light leading-[160%] text-[#C1B6A6] text-start">
                        Bavette was born from a passion for bringing the
                        finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our experienced chefs who handpick each cut to ensure perfection.
                    </p>
                    <Link href='/table-booking'>
                        <Button className="flex items-center font-oswald font-bold justify-center gap-3 px-6 py-7 rounded-full bg-black text-white border-none">BOOK TABLE{" "}
                            <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" /></Button>
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default AboutUs;
