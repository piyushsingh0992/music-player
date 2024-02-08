
import Header from "./header";
import Playlists from "./playLists"

export default function Navbar() {
 

  return (
    <div className="bg-gray-100 w-[20vw]   h-[85vh] overflow-x-auto shadow-2xl  fide-out-effect z-10 navbar-scrollbar-hide">
      <div>
        <Header avatar={"/avatar.png"}name={" Charlie-George baker"} />
        <Playlists
          heading={"YOUR LIBRARY"}
          subHeading={[
            "Recently Played",
            "Songs",
            "Albums",
            "Recommended Artists",
          ]}
        />
        <Playlists
          heading={"PLAYLISTS"}
          subHeading={[
            "Charlie's Playlist",
            "House Party Mix",
            "Ultimate Throwbacks",
          ]}
        />
          <Playlists
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
