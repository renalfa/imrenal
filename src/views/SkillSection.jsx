import React from "react";
import LogoWall from "../components/logo-wall";

import react from "../assets/react.svg";
import reactNative from "../assets/react-native.svg";
import next from "../assets/next.js.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import expo from "../assets/expo.svg";
import firebase from "../assets/firebase.svg";
import mysql from "../assets/mysql.svg";
import framer from "../assets/framer.svg";
import nodejs from "../assets/nodejs.svg";
import postgresql from "../assets/postgresql.svg";
import tailwind from "../assets/tailwind.svg";
import redux from "../assets/redux.svg";
import vue from "../assets/vue.svg";

const logoImgs = [
  { imgUrl: react, altText: "React Bits Logo" },
  { imgUrl: reactNative, altText: "React Native Logo" },
  { imgUrl: next, altText: "Next JS Logo" },
  { imgUrl: css, altText: "CSS Logo" },
  { imgUrl: html, altText: "HTML Logo" },
  { imgUrl: expo, altText: "Expo Logo" },
  { imgUrl: firebase, altText: "Firebase Logo" },
  { imgUrl: mysql, altText: "MySQL Logo" },
  { imgUrl: framer, altText: "Framer Logo" },
  { imgUrl: nodejs, altText: "Node JS Logo" },
  { imgUrl: postgresql, altText: "PostgreSQL Logo" },
  { imgUrl: tailwind, altText: "Tailwind CSS Logo" },
  { imgUrl: redux, altText: "Redux Logo" },
  { imgUrl: vue, altText: "Vue JS Logo" },
];

const SkillSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-12 bg-black md:px-29 space-y-27">
      <p className="text-sm uppercase text-neutral-500 font-extralight">
        Another Skill
      </p>
      <LogoWall
        items={logoImgs}
        direction="horizontal"
        pauseOnHover={true}
        size="clamp(8rem, 1rem + 20vmin, 25rem)"
        duration="60s"
        bgColor="#060606"
        bgAccentColor="#111111"
      />
    </div>
  );
};

export default SkillSection;
