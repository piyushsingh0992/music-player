const Playlists = ({ heading, subHeading }:{ heading:string, subHeading:Array<string> } ) => {
  return (
    <div className=" pt-8">
      <p className="text-gray-400  text-sm pl-6 pb-4 tracking-wide">
        {heading}
      </p>
      {subHeading.map((currenttext: any) => {
        return (
          <p
            key={currenttext}
            className=" pl-12 text-xs font-semibold cursor-pointer hover-fade-effect text-indigo-900 py-4 hover:text-indigo-600 relative z-10"
          >
            {currenttext}
          </p>
        );
      })}
    </div>
  );
};

export default Playlists;
