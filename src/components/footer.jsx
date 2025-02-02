import React from "react";

import logo from "../assets/images/logo.png";
import Waves from "./waves";

import {
  PiInstagramLogo,
  PiLinkedinLogo,
  PiGithubLogo,
  PiTelegramLogo,
  PiWhatsappLogo,
  PiGoogleLogo,
} from "react-icons/pi";

const sosmeds = [
  { icon: PiInstagramLogo, link: "https://www.instagram.com/renal.fa" },
  {
    icon: PiLinkedinLogo,
    link: "https://www.linkedin.com/in/reynald-faidzilah-ahmad/",
  },
  { icon: PiGithubLogo, link: "https://github.com/renalfa" },
];

const contacts = [
  {
    icon: PiTelegramLogo,
    link: "https://t.me/reynaldfa",
  },
  {
    icon: PiWhatsappLogo,
    link: "https://wa.me/62895370077222",
  },
  {
    icon: PiGoogleLogo,
    link: "mailto:rfaidzilah@gmail.com",
  },
];

const Footer = () => {
  return (
    <div className="relative flex items-center w-full px-12 bg-black border-t h-84 md:h-56 border-t-neutral-800 md:px-29">
      <Waves
        lineColor="#ffffff40"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={200}
        xGap={12}
        yGap={32}
      />
      <div className="relative flex flex-col w-full gap-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <img
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="size-12 md:size-24"
          />
          <div className="flex flex-col items-center gap-4 md:items-start md:mr-12 md:ml-auto">
            <p className="text-sm text-white uppercase font-extralight">
              Contact or business
            </p>
            <div className="flex items-center gap-6">
              {contacts.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white cursor-pointer"
                >
                  <item.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <p className="text-sm text-white uppercase font-extralight">
              Follow Me
            </p>
            <div className="flex items-center gap-6">
              {sosmeds.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white cursor-pointer"
                >
                  <item.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs text-center text-white font-extralight md:mt-0">
          Created by Reynald | 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
