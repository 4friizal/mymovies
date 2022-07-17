import axios from "axios";
import React, { useEffect, useState } from "react";
import WithRouter from "../utils/Navigation";
import Header from "../components/Header";
import Detail from "../components/Detail";
import Card from "../components/Card";

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
        console.log(data);
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
      <Detail
        poster={detailMovies.poster_path}
        title={detailMovies.title}
        tag={detailMovies.tagline}
        time={detailMovies.runtime}
        populer={detailMovies.popularity}
        status={detailMovies.status}
        budget={detailMovies.budget}
        revenue={detailMovies.revenue}
        overview={detailMovies.overview}
      />
    </div>
  );
};


export default WithRouter(DetailMovies);
