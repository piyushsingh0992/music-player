import React from "react";
import Image from "next/image";

// ProgressBar component for the progress bar
const ProgressBar = ({ currentTime, totalTime }:any) => (
  <div className="flex items-center">
    <span className="text-xs text-gray-400 font-light">{currentTime}</span>
    <div className="overflow-hidden relative flex-1 mx-2 rounded">
      <div className="border-b-4 border-gray-400 rounded"></div>
      <div className="absolute inset-x-0 top-0 -translate-x-48 border-b-4 border-indigo-700 rounded transform hover:border-indigo-500"></div>
    </div>
    <span className="text-xs text-gray-400 font-light">{totalTime}</span>
  </div>
);

const Player = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-3">
        <Image
          className={`w-6 h-6`}
          alt="Arrow down"
          width={30}
          height={30}
          src="/reverse.svg"
        />

        <Image
          className={`w-12 h-12 mx-2`}
          alt="Arrow down"
          width={30}
          height={30}
          src="/play.svg"
        />

        <Image
          className={`w-6 h-6`}
          alt="Arrow down"
          width={30}
          height={30}
          src="/fast-forward.svg"
        />
      </div>
      <ProgressBar currentTime="4:18" totalTime="5:13" />
    </div>
  );
};

export default Player;
