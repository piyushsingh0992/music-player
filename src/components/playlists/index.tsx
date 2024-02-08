import Image from "next/image";
import Avatar from "../common/avatar";
import { useState } from "react";

const Routes = () => {
  const routes = ["Home", "Browse", "Radio"];
  return (
    <div className="  flex justify-start items-center">
      {routes.map((currenttext: any) => {
        return (
          <p
            key={currenttext}
            className=" pl-8  text-indigo-900  text-xs font-semibold cursor-pointer  "
          >
            {currenttext}
          </p>
        );
      })}
    </div>
  );
};

const Search = () => {
  return (
    <div className="flex items-center h-10 rounded-full bg-white shadow-md mr-8">
      <input
        className="flex-grow px-4 rounded-l-full text-sm focus:outline-none"
        type="text"
        placeholder="Search"
      />
      {/* <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white"> */}

      <Image
        className={`w-4 h-4 mr-6`}
        src={"/search-icon.svg"}
        alt="Arrow down"
        width={4}
        height={4}
      />
      {/* </button> */}
    </div>
  );
};

const RecommendedArtists = () => {
  const artistList = [
    { imgSrc: "/artists/artist-1.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-2.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-4.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-1.png", artistName: "Jay Lewis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-4.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-1.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Jay Lewis" },
  ];

  return (
    <div className="px-8">
      <p className="text-indigo-900 text-lg font-medium cursor-pointer py-4">
        Recommended Artists
      </p>
      <div className="flex space-x-12 overflow-x-auto recommended-artist-scrollbar-hide">
        {artistList.map(({ imgSrc, artistName }, index) => {
          return (
            <div
              key={`${artistName}-${index}`}
              className="flex-shrink-0 flex flex-col justify-between items-center "
            >
              <Avatar
                src={imgSrc}
                width="160"
                height="200"
                borderRadius="rounded-2xl "
              />
              <p className="pt-4 text-indigo-900 text-xs font-semibold cursor-pointer">
                {artistName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const NewReleases = () => {
  const newReleases = [
    { imgSrc: "/artists/artist-1.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-2.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-4.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-1.png", artistName: "Jay Lewis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-4.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-1.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Jay Lewis" },
    { imgSrc: "/artists/artist-1.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-2.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-4.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-1.png", artistName: "Jay Lewis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-4.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-1.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Jay Lewis" },
  ];
  return (
    <div className="pl-8 w-[70%] ">
      <p className="text-indigo-900 text-lg font-medium cursor-pointer py-4 ">
        New Releases
      </p>
      <div className="grid grid-cols-3 gap-6 overflow-auto ">
        {newReleases.map(({ imgSrc, artistName }, index) => {
          return (
            <div
              key={`${artistName}-${index}`}
              className="flex  justify-start items-center   "
            >
              <Avatar
                src={imgSrc}
                width={70}
                height={70}
                borderRadius="rounded-xl h-16 w-16 overflow-hidden"
              />
              <div className="ml-2">
                <p className="text-indigo-900 text-sm font-semibold cursor-pointer">
                  {artistName}
                </p>
                <p className="text-gray-400 text-xs font-semibold cursor-pointer">
                  {artistName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Trending = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the index of the hovered item
  const trending = [
    { imgSrc: "/artists/artist-1.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-2.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-4.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-1.png", artistName: "Jay Lewis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-4.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-1.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Jay Lewis" },
    { imgSrc: "/artists/artist-1.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-2.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-4.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-1.png", artistName: "Jay Lewis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Ryan Hatch" },
    { imgSrc: "/artists/artist-3.png", artistName: "Calvin Kay" },
    { imgSrc: "/artists/artist-4.png", artistName: "Amber Rae" },
    { imgSrc: "/artists/artist-1.png", artistName: "Andre Davis" },
    { imgSrc: "/artists/artist-2.png", artistName: "Jay Lewis" },
  ];

  return (
    <div className="pr-8 w-[30%]">
      <p className="text-indigo-900 text-lg font-medium cursor-pointer py-4">
        Trending
      </p>
      <div>
        {trending.map(({ imgSrc, artistName }, index) => (
          <div
            key={`${artistName}-${index}`}
            onMouseEnter={() => setHoveredIndex(index as any)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex cursor-pointer justify-start items-center rounded-xl px-6 py-4 mb-4 transition-colors duration-300 ease-in-out ${
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

export default function Playlist() {
  // This is mock data and could be replaced with your actual data fetching logic

  return (
    <div className="bg-gray-200 w-[80vw]  h-[85vh] ">
      <div className="flex justify-between items-center h-[20%]">
        <Routes />
        <Search />
      </div>
      <div className="h-[80%] overflow-x-auto">
        <RecommendedArtists />
        <div className="flex ">
          <NewReleases />
          <Trending />
        </div>
      </div>
    </div>
  );
}
