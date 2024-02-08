import React from "react";

interface ProgressBarProps {
  currentTime: string;
  totalTime: string;
}

const calculateProgressPercentage = (
  currentTime: string,
  totalTime: string,
): number => {
  const timeInSeconds = (time: string): number =>
    time.split(":").reduce((acc, time) => 60 * acc + Number(time), 0);

  const currentTimeInSeconds = timeInSeconds(currentTime);
  const totalTimeInSeconds = timeInSeconds(totalTime);

  return (currentTimeInSeconds / totalTimeInSeconds) * 100;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  totalTime,
}) => {
  const progressPercentage = calculateProgressPercentage(
    currentTime,
    totalTime,
  );

  return (
    <div className="flex items-center">
      <span className="text-xs text-gray-400 font-light">{currentTime}</span>
      <div className="w-full bg-gray-300 rounded-full h-1.5 mx-4">
        <div
          className="bg-indigo-700 h-1.5 rounded-full hover:bg-indigo-500 cursor-pointer"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-400 font-light">{totalTime}</span>
    </div>
  );
};

export default ProgressBar;
