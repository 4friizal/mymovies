import axios from "axios";
import React, { useEffect, useState } from "react";
import WithRouter from "../utils/Navigation";
import Header from "../components/Header";

const DetailMovies = (props) => {
  const [detailMovies, setDetailMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { movie_id } = props.params;
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
  return (
    <div>
      <Header />
      <div className="flex mt-16">
        <img
          className="w-64 m-2 rounded-lg shadow-lg md:w-56 md:h-80 lg:h-auto lg:w-80"
          src={
            detailMovies.poster_path
              ? `https://image.tmdb.org/t/p/w500${detailMovies.poster_path}`
              : "https://via.placeholder.com/500x750?text=No%20Image"
          }
        />
        <div className="mt-10 text-2xl ml-7">
          <p className="lg:text-6xl font-mulish font-bold">
            {detailMovies.title}
          </p>
          <p className="italic font-extralight">{detailMovies.tagline}</p>
          <p>
            Duration : {Math.floor(detailMovies.runtime / 60)} hours{" "}
            {detailMovies.runtime % 60} minute
          </p>
          <p>Popularity : {detailMovies.popularity}</p>
          <p>Status : {detailMovies.status}</p>
          <p>Original Language : {detailMovies.original_language}</p>
          <p>Budget : ${detailMovies.budget}</p>
          <p>Revenue : ${detailMovies.revenue}</p>
        </div>
      </div>
      <h1 className="text-4xl my-10 ml-12">OverView</h1>
      <p className="text-xl font-roboto text-justify mx-20 mb-20">
        {detailMovies.overview}
      </p>
    </div>
  );
};


export default WithRouter(DetailMovies);
