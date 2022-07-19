import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import Header from "../components/Header";
import Card from "../components/Card";
import { WithRouter } from "../utils/Navigation";
import { reduxAction } from "../utils/redux/action/action";

const HomePage = () => {
  const dispatch = useDispatch();
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // async componentDidMount() {
  //   await this.fetchData();
  // }

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const { results } = response.data;
        setData(results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  const handelFav = (movie) => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      parsedMovies.push(movie);
      localStorage.setItem("favMovies", JSON.stringify(parsedMovies));
      dispatch(reduxAction("ADD_FAVORITE", parsedMovies));
    } else {
      localStorage.setItem("favMovies", JSON.stringify([movie]));
      dispatch(reduxAction("ADD_FAVORITE", [movie]));
    }
    alert("movie added to favorites");
  };

  return (
    <div>
      <Header />
      <div className="dark:bg-black">
        <h1 className="text-center text-5xl pt-8 font-oswald md:mb-10 md:tracking-wider md:font-semibold dark:text-white">
          Now Playing
        </h1>
        <div className="flex flex-wrap justify-center md:flex md:flex-row md:flex-wrap md:justify-center ">
          {datas.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              img={data.poster_path}
              vote={data.vote_average}
              navigate={`/detail/${data.id}`}
              onClick={() => handelFav(data)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WithRouter(HomePage);
