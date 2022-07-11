import "./../index.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="p-7 md:py-10 bg-[#113050] flex justify-between items-center lg:py-3">
        {/* <img
          src={"https://picsum.photos/100"}
          className="text-black w-8 h-8 md:w-10 rounded-full"
          alt="Movies"
        /> */}
        <button className="hidden md:flex md:items-center md:text-3xl md:font-bold md:text-yellow-400 lg:text-lg lg:ml-10 lg:hover:text-white">
          Home
        </button>
        <button className="md:hidden outline-none mobile-menu-button">
          <svg
            className="w-8 h-8 text-[#9b9d9f]"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    );
  }
}

export default Header;
