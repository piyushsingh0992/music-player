import Image from "next/image";

const Search = () => {
  return (
    <div className="flex items-center h-10 rounded-full bg-white shadow-md mr-8">
      <input
        className="flex-grow px-4 rounded-l-full text-sm focus:outline-none"
        type="text"
        placeholder="Search"
      />

      <Image
        className={`w-4 h-4 mr-6`}
        src={"/search-icon.svg"}
        alt="Arrow down"
        width={4}
        height={4}
      />
    </div>
  );
};

export default Search;
