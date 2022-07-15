import React from "react";

const Button = (props) => {
  return (
    <button className="text-white text-lg shadow-lg bg-neutral-500 dark:bg-red-600 rounded-md py-2 px-10 my-1">
      {props.label}
    </button>
  );
};

export { Button };
