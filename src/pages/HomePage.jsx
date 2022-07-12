import React, { Component } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

export class HomePage extends Component {
  // constructor
  state = {
    datas: [
      {
        id: 1,
        title: "Wanda Vision",
        image:
          "https://image.tmdb.org/t/p/original/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
      },
      {
        id: 2,
        title: "Minions the Rise of Gru",
        image:
          "https://cdn0-production-images-kly.akamaized.net/IP5VBsB7VMDK_XD8PPsgF9CK0Gg=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3081309/original/073088400_1584670497-Minions_The_Rise_of_Gru.jpg",
      },
      {
        id: 3,
        title: "Lightyear",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/p_lightyear_v3_22043_36db91d2.jpeg",
      },
      {
        id: 4,
        title: "Thor Love and Thunder",
        image:
          "https://cdn0-production-images-kly.akamaized.net/UV2d_uwDPz5uKY6u-2DzrikKRqY=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3999523/original/076350300_1650347498-FQobVY2UcAMkRSa.jpg",
      },
      {
        id: 5,
        title: "Jurassic World Dominion",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: 6,
        title: "Wanda Vision",
        image:
          "https://image.tmdb.org/t/p/original/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
      },
      {
        id: 7,
        title: "Minions the Rise of Gru",
        image:
          "https://cdn0-production-images-kly.akamaized.net/IP5VBsB7VMDK_XD8PPsgF9CK0Gg=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3081309/original/073088400_1584670497-Minions_The_Rise_of_Gru.jpg",
      },
      {
        id: 8,
        title: "Lightyear",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/p_lightyear_v3_22043_36db91d2.jpeg",
      },
      {
        id: 9,
        title: "Thor Love and Thunder",
        image:
          "https://cdn0-production-images-kly.akamaized.net/UV2d_uwDPz5uKY6u-2DzrikKRqY=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3999523/original/076350300_1650347498-FQobVY2UcAMkRSa.jpg",
      },
      {
        id: 10,
        title: "Jurassic World Dominion",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      },
    ],
  };
  render() {
    return (
      <div className="w-full">
        <Header />
        <h1 className="text-center text-4xl my-8 font-medium md:mb-0 md:tracking-wider md:font-semibold">
          Now Playing
        </h1>
        <div className="md:grid md:grid-flow-row md:auto-rows-max md:grid-cols-3 md:gap-1 lg:grid-cols-5">
          {this.state.datas.map((data) => (
            <Card key={data.id} title={data.title} img={data.image} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
