import React from "react";

const Button = (props) => {
  return (
    <button
      className="text-white text-sm shadow-lg lg:text-lg bg-neutral-500 dark:bg-red-600 rounded-md py-2 lg:px-10 mx-4 my-4"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export { Button };
