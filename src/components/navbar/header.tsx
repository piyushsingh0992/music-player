import Image from "next/image";
import Avatar from "../common/avatar";

const Header = ({ avatar, name }: { avatar: string; name: string }) => {
  return (
    <div className="flex justify-start items-center px-6 pt-8">
      <Avatar
        src={avatar}
        width="36"
        height="36"
        borderRadius="rounded-full h-12 w-12 overflow-hidden"
      />
      <p className="ml-4 text-indigo-900  text-xs font-semibold">{name}</p>
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
export default Header;
