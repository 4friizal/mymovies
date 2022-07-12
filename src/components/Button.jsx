import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className="text-white text-lg shadow-lg bg-neutral-500 dark:bg-red-600 rounded-md py-2 px-10 my-1">
        {this.props.label}
      </button>
    );
  }
}

class Button1 extends Component {
  render() {
    return (
      <button className="text-white text-lg shadow-lg dark:bg-blue-500 rounded-md py-2 px-20 my-1">
        {this.props.label}
      </button>
    );
  }
}
export { Button, Button1 };
