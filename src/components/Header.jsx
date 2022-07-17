import "./../styles/index.css";
import React from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handelNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="sticky top-0 shadow-lg bg-white shadow-slate-400 z-10">
      <div className="mx-auto px-4 py-5 flex justify-between items-center lg:py-7 lg:box-border">
        <>
          <Link to="/">
            <button className="text-xl flex items-center text-red-600 font-bold font-neue tracking-wider md:text-3xl">
              M <h1 className="text-4xl">Y</h1>
              <h1 className="text-xl">movie</h1>
            </button>
          </Link>
        </>

        {/* humberger Menu */}
        <div onClick={handelNav} className="lg:hidden z-10">
          {nav ? (
            <IoCloseOutline size={22} className="text-red-600" />
          ) : (
            <IoMenuOutline size={20} className="text-red-600" />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? "absolute left-0 top-14 w-full bg-white px-5 py-5 flex flex-col lg:hidden"
              : "absolute left-[-100%]"
          }
        >
          <ul className="text-xl font-poppins">
            <Link to="/">
              <li className=" border-b-2 mb-2 py-1">Home</li>
            </Link>
            <Link to="/favorites">
              <li className=" border-b-2 pb-1">Favorite</li>
            </Link>
          </ul>
        </div>
        {/* search button */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="lg:flex lg:border-2 lg:rounded-full">
            <input
              type="text"
              className=" lg:px-4 lg:py-2 lg:w-80 lg:rounded-l-full"
              placeholder="Search..."
            />
            <button className="lg:flex lg:items-center lg:justify-center lg:px-4 lg:border-l">
              <img
                className="lg:w-8"
                src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
                alt="search"
              />
            </button>
          </div>
        </div>
        {/* navbar */}
        <div className="hidden lg:flex lg:text-red-600 lg:mr-3 lg:font-poppins lg:text-base lg:font-bold">
          <Link to="/">
            <ul className="mr-5 lg:hover:text-black">Home</ul>
          </Link>
          <Link to="/favorites">
            <ul className="lg:hover:text-black">Favotite</ul>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
