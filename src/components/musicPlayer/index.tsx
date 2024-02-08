import React from "react";
import Image from "next/image";

// ProgressBar component for the progress bar
const ProgressBar = ({ currentTime, totalTime }: any) => {
  // First, convert currentTime and totalTime to seconds for easier calculation
  const currentTimeInSeconds = currentTime
    .split(":")
    .reduce((acc: number, time: number) => 60 * acc + +time, 0);
  const totalTimeInSeconds = totalTime
    .split(":")
    .reduce((acc: number, time: number) => 60 * acc + +time, 0);

  // Then, calculate the progress percentage
  const progressPercentage = (currentTimeInSeconds / totalTimeInSeconds) * 100;

  return (
    <div className="flex items-center ">
      <span className="text-xs text-gray-400 font-light">{currentTime}</span>

      <div className="w-full bg-gray-300 rounded-full h-1.5 mx-4">
        <div
          className="bg-indigo-700 h-1.5 rounded-full hover:bg-indigo-500 cursor-pointer "
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-400 font-light">{totalTime}</span>
    </div>
  );
};

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
