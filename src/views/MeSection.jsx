import React from "react";
import Waves from "../components/waves";

const MeSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-12 space-y-12 bg-black md:space-y-27 md:px-29">
      <Waves
        lineColor="#fff"
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
        className="!h-[240px] top-1/2 transform -translate-y-1/2"
      />
      <p className="relative text-4xl font-extrabold tracking-widest text-white uppercase md:text-7xl">
        be creative!
      </p>
    </div>
  );
};

export default MeSection;
