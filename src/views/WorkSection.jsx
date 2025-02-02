import React from "react";
import InfiniteMenu from "../components/infinite-menu";

const items = [
  {
    image: "/nwlaptop.png",
    link: "https://www.nwlaptopmadiun.com/",
    title: "NW Laptop",
    description: "Catalogue and CMS admin for laptop store",
  },
  {
    image: "/Padipos.png",
    link: "https://kasir-fe.vercel.app/",
    title: "PadiPos",
    description: "Cashier system for small business",
  },
];

const WorkSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-12 space-y-12 bg-black md:space-y-27 md:px-29">
      <p className="text-sm uppercase text-neutral-500 font-extralight">
        My Work
      </p>
      <div className="relative h-[600px] rounded-3xl border border-neutral-800 overflow-hidden">
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
};

export default WorkSection;
