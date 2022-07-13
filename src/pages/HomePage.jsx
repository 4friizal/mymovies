import React, { Component } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import axios from "axios";

export class HomePage extends Component {
  // constructor
  state = {
    datas: [],
  };

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const { results } = response.data;
        this.setState({ datas: results });
        console.log(results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div className="w-full">
        <Header />
        <h1 className="text-center text-4xl my-8 font-medium md:mb-0 md:tracking-wider md:font-semibold">
          Now Playing
        </h1>
        <div className="md:grid md:grid-flow-row md:auto-rows-max md:grid-cols-3 md:gap-1 lg:grid-cols-5">
          {this.state.datas.map((data) => (
            <Card key={data.id} title={data.title} img={data.poster_path} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
