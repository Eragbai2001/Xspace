import Navbar from "@/components/Navbar";
import React from "react";
import DestinationContent from "@/components/DestinationContent";

const Page = () => {
  return (
    <div className="destination-container">
      {/* Video Background - you can replace with destination-specific video */}
      <video autoPlay muted loop playsInline className="video-background">
        <source
          src="/destination/destination-background.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* <div className="destination-bg"></div> */}

      <div className="content-layer">
        <Navbar />
        <DestinationContent />
      </div>
    </div>
  );
};

export default Page;
