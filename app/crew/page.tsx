import Navbar from "@/components/Navbar";
import React from "react";
import CrewContent from "@/components/CrewContent";

const Page = () => {
  return (
    <div className="crew-container">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="video-background">
        <source
          src="/crew/crew-background.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Alternative: Static background if you prefer */}
      <div className="crew-bg"></div>

      <div className="content-layer">
        <Navbar />
        <CrewContent />
      </div>
    </div>
  );
};

export default Page;