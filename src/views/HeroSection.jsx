import React, { useState, useEffect, useRef } from "react";

import TextPressure from "../components/text-pressure";
import BlurText from "../components/blur-text";
import SplashCursor from "../components/splash-cursor";
import GradientText from "../components/gradient-text";

import shape1 from "../assets/images/shape-1.png";
import shape2 from "../assets/images/shape-2.png";

import { PiArrowDownLight } from "react-icons/pi";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroSectionRef = useRef(null);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const handleExploreClick = () => {
    if (document.getElementById("about")) {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const rect = heroSectionRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={heroSectionRef}
      className="relative flex flex-col justify-center h-screen bg-black px-29"
    >
      <img
        src={shape1}
        width={200}
        height={200}
        className="absolute object-contain w-50 right-12 top-2/3 rotate-12"
      />
      <img
        src={shape2}
        width={200}
        height={200}
        className="absolute object-contain w-22 left-10 top-36 -rotate-12"
      />

      {isVisible && <SplashCursor />}
      <BlurText
        text="Hello, I am"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl md:ml-3 text-neutral-500"
      />
      <TextPressure
        text="REYNALD!"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={24}
      />
      <div onClick={handleExploreClick}>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={5}
          showBorder={true}
          className="px-6 py-4 mt-6"
        >
          <div className="flex items-center justify-center gap-2">
            <PiArrowDownLight
              size={20}
              className="text-[#40ffaa] animate-bounce"
            />
            <p className="text-sm uppercase">Explore</p>
          </div>
        </GradientText>
      </div>
    </div>
  );
};

export default HeroSection;
