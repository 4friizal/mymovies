/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";
import WithRouter from "../utils/Navigation";
import Header from "../components/Header";
import Similar from "../components/SimilarList";

export const formatCurrency = (number) => {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: Math.trunc(Math.abs(number)).toFixed().length,
  }).format(number);
  return currency;
};

const DetailMovies = (props) => {
  const { movie_id } = props.params;

  const [detailMovies, setDetailMovie] = useState([]);
  const genre =
    detailMovies.length !== 0
      ? Array.from(detailMovies.genres.map((genre) => genre.name))
      : "";
  console.log(genre);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        const { data } = response;
        setDetailMovie(data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    <div>Loading page</div>;
  }

  return (
    <div>
      <Header />{" "}
      <>
        <div className="flex flex-col items-center mb-10">
          {/* card detail */}
          <div className="flex flex-col w-80 pt-2 pb-4 px-2 mt-10 shadow-xl shadow-slate-600 rounded-lg md:flex-row md:flex-wrap md:w-[48rem] lg:w-auto lg:flex-nowrap lg:mx-10">
            <img
              className="w-64 m-2 rounded-lg mx-auto shadow-lg md:w-60 md:h-30 lg:w-80"
              src={
                detailMovies.poster_path
                  ? `https://image.tmdb.org/t/p/w500${detailMovies.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No%20Image"
              }
            />
            {/* right content */}
            <div>
              {/* description detail */}
              <div className="mt-10 ml-7 md:mr-10 md:w-96 lg:ml-10 lg:w-auto lg:mt-3">
                <h1 className="text-2xl font-mulish font-bold md:text-3xl lg:text-6xl">
                  {detailMovies.title}
                </h1>
                <h6 className="text-sm italic font-extralight font-roboto mt-1 md:text-lg">
                  {detailMovies.tagline}
                </h6>
                <h5 className="text-xs italic font-poppins mt-1 md:text-lg">
                  {genre !== "" ? genre.join(", ") : ""}
                </h5>
                {/* description */}
                <div className="text-base font-poppins flex justify-between mt-3 md:text-xl">
                  <ul>
                    <li>Duration</li>
                    <li>Popularity</li>
                    <li>Status</li>
                    <li>Budget</li>
                    <li>Revenue</li>
                  </ul>
                  <ul className="">
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                  </ul>
                  <ul className="mr-6 text-right lg:mr-40">
                    <li>
                      {Math.floor(detailMovies.runtime / 60)} hours{" "}
                      {detailMovies.runtime % 60} minute
                    </li>
                    <li>{detailMovies.popularity}</li>
                    <li>{detailMovies.status}</li>
                    {detailMovies.budget === 0 ? (
                      <li>-</li>
                    ) : (
                      <li>{formatCurrency(detailMovies.budget)}</li>
                    )}
                    {detailMovies.revenue === 0 ? (
                      <li>-</li>
                    ) : (
                      <li>{formatCurrency(detailMovies.revenue)}</li>
                    )}
                  </ul>
                </div>
              </div>
              {/* overview */}
              <div className="hidden lg:inline-block">
                <h1 className="text-4xl ml-4 mt-8 mb-2 md:text-5xl md:mb-6 lg:mb-3 lg:ml-10 lg:mt-4">
                  OverView
                </h1>
                <p className="text-sm font-roboto text-justify mx-5 md:text-lg lg:text-xl lg:ml-10">
                  &emsp;&emsp;{detailMovies.overview}
                </p>
              </div>
            </div>
            <div className="lg:hidden">
              {/* overview */}
              <h1 className="text-4xl ml-4 mt-8 mb-2 md:text-5xl md:mb-6">
                OverView
              </h1>
              <p className="text-sm font-roboto text-justify mx-5 md:text-lg">
                &emsp;&emsp;{detailMovies.overview}
              </p>
            </div>
          </div>
        </div>
      </>
      <Similar movieId={movie_id} />
    </div>
  );
};

export default WithRouter(DetailMovies);
