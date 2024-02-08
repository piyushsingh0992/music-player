import Routes from "./routes";
import Search from "./Search";
import RecommendedArtists from "./recommendedArtists";
import NewReleases from "./newReleases";
import Trending from "./trending";

export default function Playlist() {
  return (
    <div className="bg-gray-200 w-[100vw] md:w-[80vw]  h-[85vh]  ">
      <div className="flex flex-col md:flex-row justify-center  md:justify-between items-center h-[20%]">
        <Routes />
        <Search />
      </div>
      <div className="h-[80%] overflow-x-auto mr-8">
        <RecommendedArtists />
        <div className="flex flex-col  md:flex-row  mt-8 mr-8">
          <NewReleases />
          <Trending />
        </div>
      </div>
    </div>
  );
}
