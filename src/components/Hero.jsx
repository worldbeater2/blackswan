// import React, { useState, useEffect } from 'react';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// url: 'https://images.unsplash.com/photo-1518897761968-5a3544c369b5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// url: 'https://images.unsplash.com/photo-1509130298739-651801c76e96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const images = [
  {
    url: "https://images.unsplash.com/photo-1711075781376-bc5107736730?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Empowering Businesses at Black Swan",
    text: "Expert Legal Counsel for Corporate and Commercial Ventures",
  },
  {
    url: "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Your Path to Corporate Clarity",
    text: "Understanding and Resolving Corporate Legal Challenges",
  },
  {
    url: "https://images.unsplash.com/photo-1469719847081-4757697d117a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // heading: 'Where Tradition Meets Innovation',
    // text: 'Guiding Businesses with Timeless Expertise and Modern Solutions'
    heading: "Unlock Success with Black Swan",
    text: "Innovative Strategies, Enduring Results in Legal Practice",
  },

  {
    url: "https://images.unsplash.com/photo-1711176488499-0a592a6d93fb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Where Tradition Meets Innovation",
    text: "Guiding Businesses with Timeless Expertise and Modern Solutions",
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeading, setCurrentHeading] = useState(images[0].heading);
  const [currentText, setCurrentText] = useState(images[0].text);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex =
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setCurrentHeading(images[newIndex].heading);
      setCurrentText(images[newIndex].text);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div
      className="hero min-h-screen w-screen relative overflow-hidden bg-cover font-navFont hover:bg-blend-normal"
      style={{
        backgroundImage: `url(${images[currentImageIndex].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background-image 2s ease-in-out",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content  text-start text-neutral-content">

        <div className="max-w-5xl">
          <h1 className="mb-5 text-4xl md:text-7xl  font-normal  tracking-wider text-center md:text-start">
            {currentHeading}
          </h1>

          <p className="mb-5  md:text-2xl text-base text-center md:text-start ">{currentText}</p>

          

          <Link to="/about">
          <div className="flex flew-row justify-center md:justify-start " >
          <button className="btn file: text-white btn-outline px-9 text-start  ">
              Read More
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
