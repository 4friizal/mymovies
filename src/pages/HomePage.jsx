import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import axios from "axios";
import { WithRouter } from "../utils/Navigation";

const HomePage = () => {
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
        console.log(response);
        const { results } = response.data;
        setData(results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full mb-10">
      <Header />
      <h1 className="text-center text-5xl my-8 font-oswald md:mb-10 md:tracking-wider md:font-semibold">
        Now Playing
      </h1>
      <div className="flex flex-wrap justify-center md:flex md:flex-row md:flex-wrap md:justify-center">
        {datas.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            img={data.poster_path}
            vote={data.vote_average}
            navigate={`/detail/${data.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WithRouter(HomePage);
