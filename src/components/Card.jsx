import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Button } from "./Button";

const Card = (props) => {
  return (
    <div className="shadow-lg m-1 rounded-lg lg:hover:scale-105 lg:hover:-translate-y-3 lg:hover:bg-black lg:hover:text-white relative flex flex-col justify-between dark:bg-slate-400 dark:shadow-slate-600">
      <Link to={props.navigate} reloadDocument>
        <img
          className="w-32 h-auto m-2 rounded-[6px] md:w-56 lg:w-48 lg:hover:opacity-50"
          src={
            props.img
              ? `https://image.tmdb.org/t/p/w500/${props.img}`
              : "https://via.placeholder.com/500x750?text=No%20Image"
          }
          alt={props.title}
        />
        <p className="w-32 m-2 font-roboto font-bold text-center text-xs md:text-lg md:w-56 lg:w-48 ">
          {props.title}
        </p>
        <h6 className="h-auto m-2 font-poppins text-xs absolute bg-black/50 p-1 pl-2 rounded-md left-2 top-2 text-yellow-500 flex items-center">
          {props.vote}
          <MdOutlineStarPurple500 />
        </h6>
      </Link>
      <Button label="Add Favorite" onClick={props.onClick} />
      {/* <MdOutlineFavorite
        className=" absolute w-7 top-1 right-4 lg:w-8 lg:top-3 lg:right-4"
        size={50}
        color="red"
      /> */}
    </div>
  );
};

export default Card;
