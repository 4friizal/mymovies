import axios from "axios";
import React, { Component } from "react";
import WithRouter from "../utils/Navigation";
import Header from "../components/Header";

export class DetailMovies extends Component {
  state = {
    detailMovies: [],
  };

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
    const { movie_id } = this.props.params;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
        this.setState({ detailMovies: data });
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => this.setState({ loading: true }));
  }
  render() {
    return (
      <div>
        <Header />
        <div className="flex ">
          <img
            className="w-64 m-2 rounded-lg shadow-lg md:w-56 md:h-80 lg:h-auto lg:w-80"
            src={
              this.state.detailMovies.poster_path
                ? `https://image.tmdb.org/t/p/w500${this.state.detailMovies.poster_path}`
                : "https://via.placeholder.com/500x750?text=No%20Image"
            }
            alt={this.props.title}
          />
          <div className="text-lg">
            <p>{this.state.detailMovies.title}</p>
            <p>{this.state.detailMovies.tagline}</p>
            <p>{this.state.detailMovies.runtime}</p>
            <p>{this.state.detailMovies.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WithRouter(DetailMovies);
