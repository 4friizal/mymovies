import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function Similar({ movieId }) {
  // const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      const { results } = response.data;
      if (results) {
        setMovies(results);
      }
    } catch (error) {
      alert(error.toString());
    }
  };
  return (
    <div className="flex flex-wrap justify-center md:flex md:flex-row md:flex-wrap md:justify-center gap-3">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          img={movie.poster_path}
          vote={movie.vote_average}
          navigate={`/detail/${movie.id}`}
        />
      ))}
    </div>
  );
}
