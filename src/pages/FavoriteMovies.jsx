import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Card from "../components/Card";
import { WithRouter } from "../utils/Navigation";

const MyFavorite = () => {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        {favorites.map((data) => (
          <Card
            data={data}
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

export default WithRouter(MyFavorite);
