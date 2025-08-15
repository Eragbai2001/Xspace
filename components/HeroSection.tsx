"use client";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen pt-24 md:pt-40 lg:pt-72 pb-12 flex flex-col lg:flex-row items-center justify-start px-6 md:px-24 lg:px-40 bg-transparent">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 space-y-6 md:space-y-8 lg:space-y-6 mb-20 lg:mb-0">
        <h2 className="font-condensed text-[#D0D6F9] text-[19px]  md:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] ">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="font-bellefair text-white text-[80px] md:text-[150px] lg:text-[144px] uppercase leading-none">
          Space
        </h1>
        <p className="font-barlow text-[#D0D6F9] text-[15px] md:text-[16px]lg:text-[18px] max-w-md leading-relaxed">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <Link href="/destination">
          <div className="group relative">
            <div className="w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[272px] lg:h-[272px] rounded-full bg-white flex items-center justify-center cursor-pointer transition-all duration-500 z-10 relative">
              <span className="font-bellefair text-[#0B0D17] text-xl md:text-[32px] tracking-[2px]">
                EXPLORE
              </span>
            </div>
            {/* Hover effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[272px] lg:h-[272px] rounded-full bg-white/10 opacity-0 group-hover:w-[350px] group-hover:h-[350px] group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
