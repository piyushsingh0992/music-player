import Image from "next/image";
import Avatar from "../common/avatar";
import Player from "../musicPlayer";

const Left = () => {
  return (
    <div
      className={`flex cursor-pointer justify-start items-center 
    `}
    >
      <Avatar
        src={"/artists/artist-1.png"}
        width={80}
        height={80}
        borderRadius="rounded-full"
      />
      <div className="ml-4 flex justify-between items-between w-[100%] ">
        <div>
          <p
            className={` 
            text-indigo-900
          text-sm font-semibold cursor-pointer`}
          >
            The Ringer
          </p>
          <p
            className={`  text-gray-400
           text-xs font-semibold cursor-pointer`}
          >
            Eminum
          </p>
        </div>
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div
      className=" hidden md:block transition-opacity duration-300 ease-in-out"
      style={{ opacity: 1 }}
    >
      <Image
        className={`w-6 h-6  `}
        alt="Arrow down"
        width={30}
        height={30}
        src="/three-dots-menu.svg"
      />
    </div>
  );
};
export default function Footer() {


  return (
    <div className="bg-gray-50 flex h-[15vh] w-[100vw] px-8 z-20">
      <div className=" w-[100%]  flex justify-between items-center">
        <Left />
        <div className="w-[80%] md:w-[40%]">
          <Player />
        </div>
        <Right />
      </div>
    </div>
  );
}
