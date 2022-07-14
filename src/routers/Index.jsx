import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DetailMovies from "../pages/DetailMovies";
import FavoriteMovies from "../pages/FavoriteMovies";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:movie_id" element={<DetailMovies />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
