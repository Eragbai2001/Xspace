import Navbar from "@/components/Navbar";
import React from "react";
import CrewContent from "@/components/CrewContent";

const Page = () => {
  return (
    <div className="crew-container">
      {/* Video Background */}
     

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