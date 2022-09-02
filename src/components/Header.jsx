import "./../styles/index.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoMoon,
  IoSunny,
} from "react-icons/io5";

import { ThemaContext } from "../utils/thema";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const { thema, setThema } = useContext(ThemaContext);

  const handelThema = (mode) => {
    setThema(mode);
  };

  // button humberger
  const handelNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="sticky top-0 shadow-lg bg-white dark:bg-black shadow-slate-400 dark:shadow-slate-700 z-10">
      <div className="mx-auto px-4 py-5 flex justify-between items-center lg:py-7 lg:box-border">
        <>
          <Link to="/">
            <button className="text-xl flex items-center text-red-600 font-bold font-neue tracking-wider md:text-3xl">
              M <h1 className="text-4xl">Y</h1>
              <h1 className="text-xl">movie</h1>
            </button>
          </Link>
        </>

        <div className="flex">
          <div className="mr-5 lg:hidden">
            {thema === "dark" ? (
              <IoSunny
                size={20}
                color="white"
                onClick={() => handelThema("light")}
              />
            ) : (
              <IoMoon
                size={20}
                color="black"
                onClick={() => handelThema("dark")}
              />
            )}
          </div>
          {/* humberger Menu */}
          <div onClick={handelNav} className="lg:hidden z-10">
            {nav ? (
              <IoCloseOutline size={22} className="text-red-600" />
            ) : (
              <IoMenuOutline size={20} className="text-red-600" />
            )}
          </div>
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
            {/* <Link to="/favorites">
              <li className=" border-b-2 pb-1">Favorite</li>
            </Link> */}
          </ul>
        </div>
        <div className="hidden lg:flex lg:text-red-600 lg:mr-3 lg:font-poppins lg:text-base lg:font-bold">
          <div className="mr-5">
            {thema === "dark" ? (
              <IoSunny
                size={20}
                color="white"
                onClick={() => handelThema("light")}
              />
            ) : (
              <IoMoon
                size={20}
                color="black"
                onClick={() => handelThema("dark")}
              />
            )}
          </div>
          <Link to="/">
            <ul className="mr-5 lg:hover:text-black">Home</ul>
          </Link>
          <Link to="/favorites">
            <button
              type="button"
              className="lg:text-black/30 dark:lg:text-white/30 cursor-no-drop"
              disabled
            >
              Favotite
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
