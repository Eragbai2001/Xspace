"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full flex items-center justify-between pl-6 md:pl-10 lg:pl-14 py-8 max-lg:py-0 max-md:py-5 z-50">
        {/* Logo */}
        <div className="flex items-center max-lg:pr-7">
          <Link href="/">
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
            </div>
          </Link>
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
          <ul className="flex w-full pl-44 max-lg:pl-24 pr-24 max-lg:pr-12 justify-between text-white font-condensed ">
            <li className="relative group h-full flex items-center">
              <Link href="/" className="nav_link py-9 relative">
                <span className="font-bold mr-2">00</span> HOME
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white"></div>
              </Link>
            </li>
            <li className="relative group h-full flex items-center">
              <Link href="/destination" className="nav_link py-9 relative">
                <span className="font-bold mr-2">01</span> DESTINATION
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-white/50"></div>
              </Link>
            </li>
            <li className="relative group h-full flex items-center">
              <Link href="/crew" className="nav_link py-9 relative">
                <span className="font-bold mr-2">02</span> CREW
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-white/50"></div>
              </Link>
            </li>
            <li className="relative group h-full flex items-center">
              <Link href="/technology" className="nav_link py-9 relative">
                <span className="font-bold mr-2">03</span> TECHNOLOGY
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-white/50"></div>
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
