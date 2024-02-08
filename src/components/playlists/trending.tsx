import Image from "next/image";
import Avatar from "../common/avatar";
import { useState } from "react";

const Trending = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  const trending = [
    { imgSrc: "/artists/artist-1.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-2.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-4.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-1.png", artistName: "Jay Lewis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-2.png", artistName: "Ryan Hatch" },
  ];

  return (
    <div className="pl-8 md:pl-0 md:pr-8   w-[100%] md:w-[30%]">
      <p className="text-indigo-900 text-lg font-semibold cursor-pointer py-4">
        Trending
      </p>
      <div className="mt-2">
        {trending.map(({ imgSrc, artistName }, index) => (
          <div
            role="button"
            key={`${artistName}-${index}`}
            onMouseEnter={() => setHoveredIndex(index as any)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex cursor-pointer justify-start items-center rounded-xl px-6 py-4 mb-4 transition-colors duration-300 ease-in-out drop-shadow-md  ${
              hoveredIndex === index ? "bg-indigo-800" : "bg-white"
            }`}
          >
            <div className="w-[25%]">
              <Avatar
                src={imgSrc}
                width="56"
                height="56"
                borderRadius="rounded-full h-12 w-12 "
              />
            </div>
            <div className="flex justify-between items-between w-[75%]  ">
              <div>
                <p
                  className={` ${
                    hoveredIndex === index ? "text-white" : "text-indigo-900"
                  } text-sm font-semibold cursor-pointer`}
                >
                  {artistName}
                </p>
                <p
                  className={` ${
                    hoveredIndex === index ? "text-white" : "text-gray-400"
                  } text-xs font-semibold cursor-pointer`}
                >
                  {artistName}
                </p>
              </div>
              {hoveredIndex === index && (
                <div
                  className=" transition-opacity duration-300 ease-in-out"
                  style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  <Image
                    className={`w-6 h-6  `}
                    alt="Arrow down"
                    width={30}
                    height={30}
                    src="/3-dot.svg"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
