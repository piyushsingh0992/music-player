import Image from "next/image";

const Search = () => {
  return (
    <div className="flex mt-6  md:mt-0 items-center h-10 md:h-12 rounded-full bg-white shadow-md mr-2 md:mr-8   w-[50%] md:w-fit">
      <input
        className="flex-grow px-4 md:px-4 rounded-l-full text-xs md:text-sm focus:outline-none placeholder-indigo-700 text-indigo-700"
        type="text"
        placeholder="Search"
      />

      <div className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-4 flex items-center justify-center">
        <Image
          src="/search-icon.svg"
          alt="Search"
          width={16} // Adjust based on your design. This could be 24 for md sizes if you want it bigger.
          height={16} // Adjust based on your design. This could be 24 for md sizes if you want it bigger.
          className="text-indigo-700"
        />
      </div>
    </div>
  );
};

export default Search;
