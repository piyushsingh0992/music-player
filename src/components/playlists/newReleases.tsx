
import Avatar from "../common/avatar";



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
    <div className="pl-8  w-[100%]  md:w-[70%]">
      <p className="text-indigo-900 text-lg font-semibold cursor-pointer py-4 ">
        New Releases
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 gap-6 overflow-auto mt-4">
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


export default NewReleases