import Avatar from "../common/avatar";

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
    <div className="pl-8 pr-0 md:px-8 mr-0 md:mr-8">
      <p className="text-indigo-900 text-lg font-semibold cursor-pointer py-4 ">
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

export default RecommendedArtists;
