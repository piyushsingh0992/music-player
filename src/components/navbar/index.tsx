import React, { useState, useRef, useEffect, RefObject } from "react";
import Header from "./header";
import Lists from "./list";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative w-0 md:w-[20vw]">
      <div className="flex justify-end -p-4 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 focus:outline-none focus:text-gray-600 absolute top-2 left-2"
          aria-label="toggle menu"
        >
          <svg viewBox="0 0 100 80" width="30" height="30" fill="currentColor">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>
      </div>

      <div
        ref={navbarRef}
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-100 w-[80vw] md:w-[20vw] h-[85vh] overflow-x-auto shadow-2xl z-10 navbar-scrollbar-hide fixed top-0 left-0 transition-transform ease-in-out duration-300 md:relative md:translate-x-0`}
      >
        <div>
          <Header avatar={"/avatar.png"} name={"Charlie-George baker"} />
          <Lists
            heading={"YOUR LIBRARY"}
            subHeading={[
              "Recently Played",
              "Songs",
              "Albums",
              "Recommended Artists",
            ]}
          />
          <Lists
            heading={"PLAYLISTS"}
            subHeading={[
              "Charlie's Playlist",
              "House Party Mix",
              "Ultimate Throwbacks",
            ]}
          />
          <Lists
            heading={"PLAYLISTS"}
            subHeading={[
              "Charlie's Playlist",
              "House Party Mix",
              "Ultimate Throwbacks",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
