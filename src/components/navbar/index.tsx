import Image from "next/image";
import Avatar from "../common/avatar";

const Index = ({ heading, subHeading }: any) => {
  return (
    <div className=" pt-8">
      <p className="text-gray-400  text-sm pl-6 pb-4 tracking-wide">
        {heading}
      </p>
      {subHeading.map((currenttext: any) => {
        return (
          <p
            key={currenttext}
            className=" pl-12 text-xs font-medium  cursor-pointer hover-fade-effect text-indigo-900 py-4 hover:text-indigo-600 relative z-10"
          >
            {currenttext}
          </p>
        );
      })}
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-start items-center px-6 pt-8">
      <Avatar
        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        width="36"
        height="36"
      />
      <p className="ml-4 text-indigo-700 text-xs font-semibold">
        Charlie-George baker
      </p>
      <Image
        className={`w-4 h-4 ml-2`}
        src={"/Arrow-down.svg"}
        alt="Arrow down"
        width={4}
        height={4}
      />
    </div>
  );
};
export default function Navbar() {
  // This is mock data and could be replaced with your actual data fetching logic

  

  return (
    <div className="bg-gray-100 w-[25vw] ">
      <div>
        <Header />
        <Index
          heading={"YOUR LIBRARY"}
          subHeading={[
            "Recently Played",
            "Songs",
            "Albums",
            "Recommended Artists",
          ]}
        />
        <Index
          heading={"PLAYLISTS"}
          subHeading={[
            "Charlie's Playlist",
            "House Party Mix",
            "Ultimate Throwbacks",
          ]}
        />
      </div>
    </div>
  );
}
