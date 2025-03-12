"use client";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Special from "./(section)/(special)/Special";
import Hero from "./(section)/Hero";
import Menu from "./(section)/Menu";
import Reviews from "./(section)/Review";
import { useEffect, useState } from "react";
import Follow from "./(section)/Follow";
import Isthanbul from "./(section)/Isthanbul";
import Experience from "./(section)/Experience";
import Glimpse from "./(section)/Glimpse";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000000]">
        <Navbar position="fixed" />
        <Hero />
        <Isthanbul />
        <Menu />
        <Experience />
        <Special />
        <Glimpse />
        <Reviews />
        <Follow />
        <Footer />
      </div>
      <div className="fixed bottom-6 right-8 z-50 hidden md:flex">
        <ViewMenu />
      </div>
    </main>
  );
}
