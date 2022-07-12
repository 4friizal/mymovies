import "./../styles/index.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="sticky top-0 p-7 bg-[#113050] flex justify-between items-center lg:p-5">
        <>
          <h1 className="text-xl text-red-600 font-bold md:text-3xl">
            My Movie
          </h1>
        </>
        <div className="flex ">
          <button className="hidden md:flex md:items-center md:text-sm md:font-bold md:text-white md:mr-12 lg:text-base">
            Home
          </button>
          <button className="hidden md:flex md:items-center md:text-sm md:font-bold md:text-white lg:text-base lg:mr-6">
            Favorite
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
