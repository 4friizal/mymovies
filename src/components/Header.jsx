import "./../styles/index.css";
import React from "react";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="shadow-lg">
        <div className="sticky top-0 mx-auto px-4 p-7 flex justify-between items-center lg:p-5">
          <>
            <Link to="/">
              <button className="text-xl flex items-center text-red-600 font-bold font-neue tracking-wider md:text-3xl">
                M <h1 className="text-4xl">Y</h1>
                <h1 className="text-xl">movie</h1>
              </button>
            </Link>
          </>
          <div>
            <Link to="/favorites">
              <img
                src="https://www.svgrepo.com/show/48915/favorite.svg"
                alt="test"
              />
              <button className="hidden md:flex md:items-center md:text-sm md:font-bold md:text-white lg:text-sm lg:mr-6"></button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
