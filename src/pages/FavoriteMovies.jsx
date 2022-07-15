import React from "react";
import { WithRouter } from "../utils/Navigation";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import Header from "../components/Header";

const FavoriteMovies = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-8xl text-red-400">PAGE NOT READY!!!</h1>
        <Link to="/">
          <Button label="Back" />
        </Link>
      </div>
    </div>
  );
};

export default WithRouter(FavoriteMovies);
