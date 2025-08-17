"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Technology data
const technologies = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    images: {
      portrait: "/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/technology/image-launch-vehicle-landscape.jpg",
      tablet: "/technology/Image.png",
    },
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    images: {
      portrait: "/technology/image-spaceport-portrait.jpg",
      landscape: "/technology/image-spaceport-landscape.jpg",
      tablet: "/technology/Technology Image - A.jpg",
    },
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    images: {
      portrait: "/technology/image-space-capsule-portrait.jpg",
      landscape: "/technology/image-space-capsule-landscape.jpg",
      tablet: "/technology/Technology Image - B.jpg",
    },
  },
];

const TechnologyContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const technology = technologies[activeTab];

  // Check if mobile for responsive image
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full h-100vh flex flex-col pt-24 md:pt-28 lg:pt-24  lg:pl-40 lg:pr-0 bg-transparent overflow-hidden">
      <h2 className="font-condensed text-white text-base md:text-xl lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] mb-8 md:mb-10 lg:mb-16 text-center md:text-left mt-10">
        <span className="font-bold mr-4 text-white/25">03</span>SPACE LAUNCH 101
      </h2>

      <div className="flex flex-col lg:flex-row w-full mt-2 lg:mt-4">
        {/* Image for mobile and tablet - full width */}
        <div className="lg:hidden w-full h-[170px] md:h-[310px] relative mb-8 md:mb-12 order-1">
          <Image
            src={technology.images.landscape}
            alt={technology.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        

        

        {/* Desktop layout - horizontal alignment */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-8 md:gap-12 lg:gap-16 order-2">
          {/* Left side: Numbered Navigation */}
          <div className="flex justify-center items-center lg:flex-col gap-4 md:gap-6 lg:gap-4 lg:flex-shrink-0">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border border-white/25 font-bellefair text-base md:text-2xl lg:text-[32px] transition-colors duration-300 ${
                  activeTab === index
                    ? "bg-white text-[#0B0D17]"
                    : "bg-transparent text-white hover:border-white"
                }`}
                aria-label={`Select ${technologies[index].name}`}>
                {index + 1}
              </button>
            ))}
          </div>

          {/* Middle: Text Content */}
          <div className="flex flex-col items-center lg:items-start lg:flex-1 lg:max-w-md lg:mx-6 text-center lg:text-left">
            <p className="font-bellefair text-gray-400 text-sm md:text-[26px] tracking-widest mb-2 md:mb-3">
              THE TERMINOLOGY...
            </p>
            <h3 className="font-bellefair text-white text-2xl md:text-[40px] lg:text-[46px] uppercase mb-4 md:mb-6">
              {technology.name}
            </h3>
            <p className="font-barlow text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[15px] leading-relaxed">
              {technology.description}
            </p>
          </div>

          {/* Right side: Desktop image */}
          <div className="hidden lg:block lg:flex-shrink-0 lg:w-[400px] lg:h-[400px] xl:w-[515px] xl:h-[527px] relative">
            <Image
              src={technology.images.portrait}
              alt={technology.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyContent;
