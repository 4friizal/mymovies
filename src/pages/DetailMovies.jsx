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
        <div className="flex mt-16">
          <img
            className="w-64 m-2 rounded-lg shadow-lg md:w-56 md:h-80 lg:h-auto lg:w-80"
            src={
              this.state.detailMovies.poster_path
                ? `https://image.tmdb.org/t/p/w500${this.state.detailMovies.poster_path}`
                : "https://via.placeholder.com/500x750?text=No%20Image"
            }
            alt={this.props.title}
          />
          <div className="mt-10 text-2xl ml-7">
            <p className="lg:text-6xl font-mulish font-bold">
              {this.state.detailMovies.title}
            </p>
            <p className="italic font-extralight">
              {this.state.detailMovies.tagline}
            </p>
            <p>
              Duration : {Math.floor(this.state.detailMovies.runtime / 60)}{" "}
              hours {this.state.detailMovies.runtime % 60} minute
            </p>
            <p>Popularity : {this.state.detailMovies.popularity}</p>
            <p>Status : {this.state.detailMovies.status}</p>
            <p>
              Original Language : {this.state.detailMovies.original_language}
            </p>
            <p>Budget : ${this.state.detailMovies.budget}</p>
            <p>Revenue : ${this.state.detailMovies.revenue}</p>
          </div>
        </div>
        <h1 className="text-4xl my-10 ml-12">OverView</h1>
        <p className="text-xl font-roboto text-justify mx-20 mb-20">
          {this.state.detailMovies.overview}
        </p>
      </div>
    );
  }
}

export default WithRouter(DetailMovies);
