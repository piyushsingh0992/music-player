import Image from "next/image";
import Avatar from "../common/avatar";

const Left = () => {
  return (
    <div
      className={`flex cursor-pointer justify-start items-center 
    `}
    >
      <Avatar
        src={"/sample-song.png"}
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
      className=" transition-opacity duration-300 ease-in-out"
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
  // This is mock data and could be replaced with your actual data fetching logic

  return (
    <div className="bg-gray-50 flex h-[15vh] w-[100vw] px-8">
      <div className="w-[100%]  flex justify-between items-center">
        <Left />
        <p>Player</p>
        <Right />
      </div>
    </div>
  );
}
