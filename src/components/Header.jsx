import "./../styles/index.css";
import React from "react";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="shadow-lg shadow-slate-400">
        <div className="sticky top-0 mx-auto px-4 p-7 flex justify-between items-center lg:p-5">
          <>
            <Link to="/">
              <button className="text-xl flex items-center text-red-600 font-bold font-neue tracking-wider md:text-3xl">
                M <h1 className="text-4xl">Y</h1>
                <h1 className="text-xl">movie</h1>
              </button>
            </Link>
          </>
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
          <div>
            <Link to="/favorites">
              <img
                src="https://www.svgrepo.com/show/48915/favorite.svg"
                alt="test"
              />
              <button className="md:flex md:items-center md:text-sm md:font-bold md:text-white lg:text-sm lg:mr-6"></button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
