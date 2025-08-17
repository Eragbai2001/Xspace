import React from 'react';
import Navbar from '@/components/Navbar';
import TechnologyContent from '@/components/TechnologyContent';

const Page = () => {
  return (
    <div className="technology-container">
      {/* Background Image */}
      <div className="technology-bg"></div>

      {/* Alternative: Video Background 
      <video autoPlay muted loop playsInline className="video-background">
        <source src="/technology/technology-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      */}

      <div className="content-layer">
        <Navbar />
        <TechnologyContent />
      </div>
    </div>
  );
};

export default Page;