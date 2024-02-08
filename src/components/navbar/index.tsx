import React, { useState, useRef, useEffect } from "react";
import Header from "./header";
import Lists from "./list";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(); // Create a ref for the Navbar

  // Effect to add an event listener to the document
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the Navbar is open and if the click is outside the Navbar
      if (isOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false); // Close the Navbar
      }
    }

    // Add click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]); // Effect dependencies

  return (
    <div className="relative w-0 md:w-[20vw]">
      {/* Hamburger Menu */}
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

      {/* Navbar */}
      <div
        ref={navbarRef} // Attach the ref here
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
}
