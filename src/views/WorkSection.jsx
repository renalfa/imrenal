import React from "react";
import InfiniteMenu from "../components/infinite-menu";

const items = [
  {
    image:
      "/firebase-storage/v0/b/np-v1-b94f5.appspot.com/o/WhatsApp%20Image%202025-02-01%20at%2011.40.16.jpeg?alt=media&token=d3c22b13-6dce-4f50-9cc7-7fab13f91a47",
    link: "https://www.nwlaptopmadiun.com/",
    title: "NW Laptop",
    description: "Catalogue and CMS admin for laptop store",
  },
  {
    image:
      "/firebase-storage/v0/b/np-v1-b94f5.appspot.com/o/WhatsApp%20Image%202025-02-01%20at%2011.21.33.jpeg?alt=media&token=77ec4283-c645-43c6-8867-8cf28357dbf1",
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
