"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showSoundAlert, setShowSoundAlert] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/sounds/space-ambient.mp3");
    audioRef.current.loop = true;

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleEnableSound = () => {
    if (!audioRef.current) return;

    audioRef.current.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
    setIsPlaying(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
        // Most browsers require user interaction before playing audio
        setIsPlaying(false);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <nav className="fixed w-full flex items-center justify-between pl-6 md:pl-10 lg:pl-14 py-8 max-lg:py-0 max-md:py-5 z-50">
        {/* Logo */}
        <div className="flex items-center max-lg:pr-7 relative group">
          <div
            onClick={toggleSound}
            className="cursor-pointer relative transition-transform hover:scale-110">
            <div className="relative">
              <Image
                src="/home/Subtract.png"
                alt="SpaceX Logo"
                width={48}
                height={48}
                className="object-contain max-md:hidden"
              />
              <Image
                src="/home/Subtract.png"
                alt="SpaceX Logo"
                width={40}
                height={40}
                className="hidden max-md:block object-contain"
              />

              {/* Sound indicator */}
              <div
                className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                  isPlaying ? "bg-green-400 animate-pulse" : "bg-red-400"
                }`}></div>
            </div>

            {/* Tooltip */}
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {isPlaying ? "Mute sound" : "Play sound"}
            </div>
          </div>
        </div>
        {/* Mobile & Tablet Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 mr-6 z-60"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}></span>
        </button>

        {/* Extended Horizontal Line that continues into the navbar */}
        <div className="hidden lg:block h-px bg-white/25 absolute left-[167px] right-[896px] top-1/2 -translate-y-1/2 z-10"></div>

        {/* Desktop Navigation Items */}
        <div className="bg-white/5 backdrop-blur-lg w-[936px] h-[96px] flex items-center relative max-md:hidden">
          <ul className="flex w-full pl-44 max-lg:pl-24 pr-24 max-lg:pr-12 justify-between text-white font-condensed">
            <li className="relative group h-full flex items-center">
              <Link href="/" className="nav_link py-9 relative">
                <span className="font-bold mr-2">00</span> HOME
                <div
                  className={`absolute bottom-0 left-0 w-full h-[3px] ${
                    pathname === "/"
                      ? "bg-white"
                      : "bg-transparent group-hover:bg-white/50"
                  }`}></div>
              </Link>
            </li>
            <li className="relative group h-full flex items-center">
              <Link href="/destination" className="nav_link py-9 relative">
                <span className="font-bold mr-2">01</span> DESTINATION
                <div
                  className={`absolute bottom-0 left-0 w-full h-[3px] ${
                    pathname === "/destination"
                      ? "bg-white"
                      : "bg-transparent group-hover:bg-white/50"
                  }`}></div>
              </Link>
            </li>
            <li className="relative group h-full flex items-center">
              <Link href="/crew" className="nav_link py-9 relative">
                <span className="font-bold mr-2">02</span> CREW
                <div
                  className={`absolute bottom-0 left-0 w-full h-[3px] ${
                    pathname === "/crew"
                      ? "bg-white"
                      : "bg-transparent group-hover:bg-white/50"
                  }`}></div>
              </Link>
            </li>
            <li className="relative group h-full flex items-center">
              <Link href="/technology" className="nav_link py-9 relative">
                <span className="font-bold mr-2">03</span> TECHNOLOGY
                <div
                  className={`absolute bottom-0 left-0 w-full h-[3px] ${
                    pathname === "/technology"
                      ? "bg-white"
                      : "bg-transparent group-hover:bg-white/50"
                  }`}></div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile & Tablet Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[254px] bg-[#0B0D17]/15 backdrop-blur-[40px] transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Close button */}
        <button
          className="absolute top-8 right-6 w-8 h-8 flex items-center justify-center"
          onClick={closeMenu}
          aria-label="Close menu"></button>

        {/* Mobile Navigation Items */}
        <nav className="pt-32 px-8">
          <ul className="space-y-8 text-white font-condensed tracking-[0.2em] text-base">
            <li>
              <Link
                href="/"
                className="flex items-center hover:text-white/70 transition-colors uppercase"
                onClick={closeMenu}>
                <span className="font-bold mr-4 text-white/50">00</span> HOME
              </Link>
            </li>
            <li>
              <Link
                href="/destination"
                className="flex items-center hover:text-white/70 transition-colors uppercase"
                onClick={closeMenu}>
                <span className="font-bold mr-4 text-white/50">01</span>{" "}
                DESTINATION
              </Link>
            </li>
            <li>
              <Link
                href="/crew"
                className="flex items-center hover:text-white/70 transition-colors uppercase"
                onClick={closeMenu}>
                <span className="font-bold mr-4 text-white/50">02</span> CREW
              </Link>
            </li>
            <li>
              <Link
                href="/technology"
                className="flex items-center hover:text-white/70 transition-colors uppercase"
                onClick={closeMenu}>
                <span className="font-bold mr-4 text-white/50">03</span>{" "}
                TECHNOLOGY
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Navbar;
