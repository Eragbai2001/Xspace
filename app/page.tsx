import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import React from "react";

const Page = () => {
  return (
    <div className="homepage-container">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="video-background"
      >
        <source src="/home/space-background.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      <div className="content-layer">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Page;