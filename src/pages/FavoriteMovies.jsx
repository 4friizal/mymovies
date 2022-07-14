import React, { Component } from "react";
import { WithRouter } from "../utils/Navigation";
import Header from "../components/Header";

export class FavoriteMovies extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-8xl text-red-400">PAGE NOT READY!!!</h1>
        </div>
      </div>
    );
  }
}

export default WithRouter(FavoriteMovies);
