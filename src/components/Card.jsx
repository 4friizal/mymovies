import React, { Component } from "react";
import { Button, Button1 } from "./Button";

export class Card extends Component {
  render() {
    return (
      <div className="py-8 w-72 mx-auto my-10 rounded-xl bg-slate-100 flex flex-col justify-between items-center shadow-xl md:w-56 md:pt-4 md:pb-7 lg:w-56 lg:pt-2 lg:pb-5 lg:my-8">
        <img
          className="w-64 m-2 md:w-56 md:h-80 lg:h-72 lg:w-52"
          src={this.props.img}
          alt={this.props.title}
        />
        <h5 className="text-black mt-3 mb-5 text-2xl text-center py-2 font-serif tracking-tight md:text-xl lg:text-lg">
          {this.props.title}
        </h5>
        <Button1 label="Detail" />
        <Button label="Add to Favorite" />
      </div>
    );
  }
}

export default Card;
