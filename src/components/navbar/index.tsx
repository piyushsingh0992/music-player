import Image from "next/image";
import Avatar from "../common/avatar";
export default function Navbar() {
  // This is mock data and could be replaced with your actual data fetching logic

  const Header = () => {
    return (
      <div className="flex justify-start items-center">
        <Avatar
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          width="28"
          height="28"
        />
        <p className="ml-4 text-indigo-700 text-sm font-semibold">
          Charlie-George baker
        </p>
        <Image
        className={`w-6 h-6 ml-2`}
        src={"/Arrow-down.svg"}
        alt="Arrow down"
        width={6}
        height={6}
      />
      </div>
    );
  };
  return (
    <div className="bg-gray-100 w-[25vw] px-4 py-6">
      <div>
        <Header />
      </div>
    </div>
  );
}
