import React from "react";
import Image from "next/image";
import ProgressBar from "./progressBar";

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
