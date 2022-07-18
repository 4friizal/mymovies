import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DetailMovies from "../pages/DetailMovies";
import FavoriteMovies from "../pages/FavoriteMovies";
import { Link } from "react-router-dom";

import { ThemaContext } from "../utils/thema";

const App = () => {
  const [thema, setThema] = useState("light");

  const background = useMemo(() => ({ thema, setThema }), [thema]);

  useEffect(() => {
    if (thema === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [thema]);

  return (
    <ThemaContext.Provider value={background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:movie_id" element={<DetailMovies />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
          <Route
            path="*"
            element={
              <div className="flex ml-6 mt-4">
                <h1 className=" text-slate-400">
                  Page not found 404............
                </h1>
                <Link className="ml-2 text-slate-700 hover:underline" to="/">
                  Back to Page
                </Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemaContext.Provider>
  );
};

export default App;
