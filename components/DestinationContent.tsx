"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Destination data
const destinations = [
  {
    name: "MOON",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    images: {
      desktop: "/destination/image-moon.webp",
      tablet: "/destination/image-moon-tablet.webp",
      mobile: "/destination/image-moon-mobile.webp",
    },
  },
  {
    name: "MARS",
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    images: {
      desktop: "/destination/image-mars.webp",
     
    },
  },
  {
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
    images: {
      desktop: "/destination/image-europa.webp",
     
    },
  },
  {
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    images: {
      desktop: "/destination/image-titan.webp",
    
    },
  },
];

const DestinationContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const destination = destinations[activeTab];

  return (
    <section className="w-full h-100vh flex flex-col pt-24 md:pt-28 lg:pt-32 px-6 md:px-24 lg:px-40 bg-transparent overflow-hidden align-baseline">
      <h2 className="font-condensed text-white text-base md:text-xl lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] mb-4 md:mb-6 lg:mb-8 text-center md:text-left mt-10 ">
        <span className="font-bold mr-4 text-white/25">01</span>PICK YOUR
        DESTINATION
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center flex-1 lg:items-center lg:justify-between gap-4 md:gap-6 lg:gap-12 mt-10   ">
        {/* Planet Image */}
        <div className="lg:flex-1 flex justify-center lg:justify-center items-center">
          <div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px]">
            <Image
              src={destination.images.desktop}
              alt={destination.name}
              fill
              className="object-contain animate-spin-slow"
                priority
              />
           
          </div>
        </div>

        {/* Content */}
        <div className="lg:flex-1 flex flex-col items-center lg:items-start">
          {/* Tabs */}
          <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-6">
            {destinations.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative font-condensed text-[#D0D6F9] hover:text-white pb-2 text-[14px] md:text-[16px] lg:text-base tracking-[1.5px] md:tracking-[2.7px] ${
                  activeTab === index ? "text-white" : ""
                }`}>
                {item.name}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[3px] bg-white transform origin-left transition-transform duration-300 ${
                    activeTab === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Destination Info */}
          <h1 className="font-bellefair text-white text-[56px] md:text-[80px] lg:text-[80px] mb-1 md:mb-2 uppercase">
            {destination.name}
          </h1>
          <p className="font-barlow text-[#D0D6F9] text-[15px] md:text-[18px] lg:text-base max-w-md text-center lg:text-left mb-0 leading-relaxed line-clamp-4 md:line-clamp-5 pb-4 md:pb-6 border-b border-white/20">
            {destination.description}
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-start w-full gap-4 md:gap-12 mt-4 md:mt-6">
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-condensed text-[#D0D6F9] text-xs md:text-sm tracking-widest mb-1 md:mb-2">
                AVG. DISTANCE
              </p>
              <p className="font-bellefair text-white text-[28px] md:text-[28px] lg:text-[28px]">
                {destination.distance}
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-condensed text-[#D0D6F9] text-xs md:text-sm tracking-widest mb-1 md:mb-2">
                EST. TRAVEL TIME
              </p>
              <p className="font-bellefair text-white text-[20px] md:text-[24px] lg:text-[28px]">
                {destination.travelTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationContent;
