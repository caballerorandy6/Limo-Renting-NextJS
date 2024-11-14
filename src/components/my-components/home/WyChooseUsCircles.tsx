"use client";

import { whyChooseUsArray } from "@/lib/utils";

const WyChooseUsCircles = () => {
  return (
    <div className="relative flex justify-between">
      {whyChooseUsArray.map((item, index) => (
        <div
          key={item.title}
          className={`absolute flex flex-col items-center rounded-full w-[30vh] h-[30vh] font-sans bg-stone-900 ${
            index === 0
              ? "place-self-start"
              : index === 1
              ? "mt-28 left-1/2"
              : "mt-96 left-1/4"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-red-500 font-sans font-bold text-4xl mt-14">
              {item.numberInfo}
              <span className="text-white">{item.symbol}</span>
            </h1>
            <h3 className="text-white font-mono my-4">{item.title}</h3>
            <p className="text-white/80 text-sm w-[20vh]">{item.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WyChooseUsCircles;
