import React from "react";

import DecryptedText from "../components/decrypted-text";
import Squares from "../components/square";
import SpotlightCard from "../components/spotlight-card";

import nextIcon from "../assets/next.js.svg";
import reactIcon from "../assets/react-native.svg";

const AboutSection = () => {
  return (
    <div id="about" className="relative flex items-center justify-center h-screen bg-black px-29">
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#222"
        hoverFillColor="#222"
      />
      <div className="absolute flex flex-col items-center justify-center space-y-16 md:space-y-24">
        <p className="text-sm uppercase text-neutral-500 font-extralight">
          about me
        </p>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <DecryptedText
              text="I am a front-end developer"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              parentClassName="md:text-3xl"
            />
            <DecryptedText
              text="develop web and mobile apps"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              parentClassName="md:text-3xl"
            />
            <DecryptedText
              text="with experience less than 2 year"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              parentClassName="md:text-3xl"
            />
            <DecryptedText
              text="using React and Next JS"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              parentClassName="md:text-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-6 md:flex-row">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img
              src={nextIcon}
              height={200}
              width={200}
              alt="icon-next"
              className="absolute opacity-30 -top-6 -left-8 size-24 rotate-12"
            />
            <div className="relative">
              <p className="text-3xl font-semibold uppercase text-neutral-500">
                next js
              </p>
              <p className="text-sm tracking-widest text-neutral-600 font-extralight">
                Javascript and Typescript
              </p>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img
              src={reactIcon}
              height={200}
              width={200}
              alt="icon-next"
              className="absolute -top-6 -left-8 size-24 rotate-12"
            />
            <div className="relative">
              <p className="text-3xl font-semibold uppercase text-neutral-500">
                react js
              </p>
              <p className="text-sm tracking-widest text-neutral-600 font-extralight">
                Javascript and Typescript
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
