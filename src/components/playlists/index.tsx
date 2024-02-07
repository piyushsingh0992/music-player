import Image from "next/image";
import Avatar from "../common/avatar";

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
    { imgSrc: "/sample-song.png", artistName: "Ryan Hatch" },
    { imgSrc: "/sample-song.png", artistName: "Calvin Kay" },
    { imgSrc: "/sample-song.png", artistName: "Amber Rae" },
    { imgSrc: "/sample-song.png", artistName: "Andre Davis" },
    { imgSrc: "/sample-song.png", artistName: "Jay Lewis" },
    { imgSrc: "/sample-song.png", artistName: "Ryan Hatch" },
    { imgSrc: "/sample-song.png", artistName: "Calvin Kay" },
    { imgSrc: "/sample-song.png", artistName: "Amber Rae" },
    { imgSrc: "/sample-song.png", artistName: "Andre Davis" },
    { imgSrc: "/sample-song.png", artistName: "Jay Lewis" },
  ];

  return (
    <div className="px-8">
      <p className="text-indigo-900 text-lg font-medium cursor-pointer py-4">Recommended Artists</p>
      <div className="flex space-x-12 overflow-x-auto recommended-artist-scrollbar-hide">
        {artistList.map(({ imgSrc, artistName }, index) => {
          return (
            <div
              key={`${artistName}-${index}`}
              className="flex-shrink-0 flex flex-col justify-start items-center"
            >
              <Avatar src={imgSrc} width="160" height="200" borderRadius="rounded-2xl" />
              <p className="pt-4 text-indigo-900 text-xs font-semibold cursor-pointer">{artistName}</p>
            </div>
          );
        })}
      </div>
</div>
    
  );
};

const NewReleases = () => {
  const newReleases= [
    { imgSrc: "/sample-song.png", artistName: "Ryan Hatch" },
    { imgSrc: "/sample-song.png", artistName: "Calvin Kay" },
    { imgSrc: "/sample-song.png", artistName: "Amber Rae" },
    { imgSrc: "/sample-song.png", artistName: "Andre Davis" },
    { imgSrc: "/sample-song.png", artistName: "Jay Lewis" },
    { imgSrc: "/sample-song.png", artistName: "Ryan Hatch" },
    { imgSrc: "/sample-song.png", artistName: "Calvin Kay" },
    { imgSrc: "/sample-song.png", artistName: "Amber Rae" },
    { imgSrc: "/sample-song.png", artistName: "Andre Davis" },
    { imgSrc: "/sample-song.png", artistName: "Jay Lewis" },
  ];
  return (
    <div className="px-8">
      <p className="text-indigo-900 text-lg font-medium cursor-pointer py-4">New Releases</p>
      <div className="grid grid-cols-3 gap-12 overflow-auto">
        {newReleases.map(({ imgSrc, artistName }, index) => {
          return (
            <div
              key={`${artistName}-${index}`}
              className="flex flex-col justify-start items-center space-y-4"
            >
              <Avatar src={imgSrc} width={160} height={200} borderRadius="rounded-2xl" />
              <p className="text-indigo-900 text-xs font-semibold cursor-pointer">{artistName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Trending = () => {
  const trending= [
    { imgSrc: "/sample-song.png", artistName: "Ryan Hatch" },
    { imgSrc: "/sample-song.png", artistName: "Calvin Kay" },
    { imgSrc: "/sample-song.png", artistName: "Amber Rae" },
    { imgSrc: "/sample-song.png", artistName: "Andre Davis" },
    { imgSrc: "/sample-song.png", artistName: "Jay Lewis" },
    { imgSrc: "/sample-song.png", artistName: "Ryan Hatch" },
    { imgSrc: "/sample-song.png", artistName: "Calvin Kay" },
    { imgSrc: "/sample-song.png", artistName: "Amber Rae" },
    { imgSrc: "/sample-song.png", artistName: "Andre Davis" },
    { imgSrc: "/sample-song.png", artistName: "Jay Lewis" },
  ];
  return (
    <div className="px-8">
      <p className="text-indigo-900 text-lg font-medium cursor-pointer py-4">New Releases</p>
      <div className="grid grid-cols-3 gap-12 overflow-auto">
        {trending.map(({ imgSrc, artistName }, index) => {
          return (
            <div
              key={`${artistName}-${index}`}
              className="flex flex-col justify-start items-center space-y-4"
            >
              <Avatar src={imgSrc} width={160} height={200} borderRadius="rounded-2xl" />
              <p className="text-indigo-900 text-xs font-semibold cursor-pointer">{artistName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default function Playlist() {
  // This is mock data and could be replaced with your actual data fetching logic

  return (
    <div className="bg-gray-200 w-[80vw]  h-[85vh] ">
    <div className="flex justify-between items-center pt-10 h-[20%]">
      <Routes />
      <Search />
    </div>
    <div className= "h-[80%] overflow-x-auto">
    <RecommendedArtists />
    <div>
      <NewReleases />
    </div>
    </div>
  </div>
  );
}
