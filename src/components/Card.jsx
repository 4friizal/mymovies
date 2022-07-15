import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="shadow-xl m-1 rounded-lg lg:hover:scale-105 lg:hover:-translate-y-3 lg:hover:bg-black lg:hover:text-white relative flex flex-col ">
      <Link to={props.navigate}>
        <img
          className="w-64 m-2 rounded-[6px] md:w-56 md:h-80 lg:h-72 lg:w-48 lg:hover:opacity-50"
          src={
            props.img
              ? `https://image.tmdb.org/t/p/w500/${props.img}`
              : "https://via.placeholder.com/500x750?text=No%20Image"
          }
          alt={props.title}
        />
        <p className="w-64 m-2 md:w-56 lg:w-48 font-roboto font-bold text-center text-sm">
          {props.title}
        </p>
        <h6 className="w-64 m-2 md:w-56 lg:w-48 font-poppins text-xs absolute left-2 top-2 text-yellow-500 flex items-center">
          <p className="text-lg mr-1">★</p>
          {props.vote}
        </h6>
      </Link>
      <img
        className="w-8 absolute top-4 right-4"
        src="https://www.svgrepo.com/show/48915/favorite.svg"
        alt="test"
      />
    </div>
  );
};

export default Card;
