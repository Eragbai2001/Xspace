"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Crew data
const crewMembers = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    images: {
      desktop: "/crew/image-douglas-hurley.webp",
      tablet: "/crew/image-douglas-hurley-tablet.webp",
      mobile: "/crew/image-douglas-hurley-mobile.webp",
    },
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    images: {
      desktop: "/crew/image-mark-shuttleworth.webp",
    },
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    images: {
      desktop: "/crew/image-victor-glover.webp",
    },
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    images: {
      desktop: "/crew/image-anousheh-ansari.webp",
    },
  },
];

const CrewContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const crewMember = crewMembers[activeTab];

  // Determine correct image based on screen size

  return (
    <section className="w-full h-100vh flex flex-col pt-24 md:pt-28 lg:pt-32 px-6 md:px-24 lg:px-40 bg-transparent overflow-hidden ">
      <h2 className="font-condensed text-white text-base md:text-xl lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]  text-center md:text-left mt-10 ">
        <span className="font-bold mr-4 text-white/25">02</span>MEET YOUR CREW
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-start gap-4 md:gap-6 lg:gap-12 lg:h-[calc(100vh-210px)] mt-10">
        {/* Content */}
        <div className="flex flex-col items-center lg:items-start max-w-lg order-2 lg:order-1">
          {/* Role and Name */}
          <h3 className="font-bellefair text-white/50 text-[16px] md:text-[24px] lg:text-[32px] uppercase mb-2 md:mb-3">
            {crewMember.role}
          </h3>
          <h1 className="font-bellefair text-white text-[24px] md:text-[40px] lg:text-[52px] uppercase mb-4 md:mb-6">
            {crewMember.name}
          </h1>

          <p className="font-barlow text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] text-center lg:text-left mb-8 md:mb-10 leading-relaxed">
            {crewMember.bio}
          </p>

          {/* Dots Navigation */}
          <div className="flex space-x-7 mt-6 md:mt-10 lg:mt-auto">
            {crewMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeTab === index
                    ? "bg-white"
                    : "bg-white/20 hover:bg-white/50"
                }`}
                aria-label={`View ${crewMembers[index].name}`}
              />
            ))}
          </div>
        </div>

        {/* Crew Member Image */}
        <div className="flex justify-center md:flex lg:grid place-items-end md:justify-self-center lg:justify-self-end w-full h-full relative order-2 lg:order-2 md:mt-auto md:mb-0 md:pb-0">
          {/* Add a container to help with positioning */}
          <div className="md:flex md:justify-center md:items-center md:w-full md:mt-auto lg:block">
            <div className="relative w-[271.24px] h-[340px] md:w-[305.3px] md:h-[488.96px] lg:w-[501.33px] lg:h-[623px] z-10 self-end">
              <Image
                src={crewMember.images.desktop}
                alt={crewMember.name}
                fill
                className="object-contain mix-blend-normal"
                priority
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewContent;
