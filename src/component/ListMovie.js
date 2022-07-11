import React from "react";
import "./../index.css";

class OptionFilm extends React.Component {
  render() {
    return (
      <div className="lg:w-full lg:flex lg:justify-center">
        <div>
          <img
            className="mx-auto md:mx-4 w-64 h-[23rem]  drop-shadow-lg pt-10 lg:w-44 lg:h-60"
            src="https://picsum.photos/202"
            alt="film"
          />
          <h1 className="text-center w-64 mx-auto py-4 font-semibold text-xl lg:text-xs lg:w-40">
            Judul Film 1
          </h1>
        </div>
        <div>
          <img
            className="mx-auto md:mx-4 w-64 h-[23rem]  drop-shadow-lg pt-10 lg:w-44 lg:h-60"
            src="https://picsum.photos/200"
            alt="film"
          />
          <h1 className="text-center w-64 mx-auto py-4 font-semibold text-xl lg:text-xs lg:w-40">
            Judul Film 2
          </h1>
        </div>
        <div>
          <img
            className="mx-auto md:mx-4 w-64 h-[23rem]  drop-shadow-lg pt-10 lg:w-44 lg:h-60"
            src="https://picsum.photos/256"
            alt="film"
          />
          <h1 className="text-center w-64 mx-auto py-4 font-semibold text-xl lg:text-xs lg:w-40">
            Judul Film 3
          </h1>
        </div>
        <div>
          <img
            className="mx-auto md:mx-4 w-64 h-[23rem]  drop-shadow-lg pt-10 lg:w-44 lg:h-60"
            src="https://picsum.photos/257"
            alt="film"
          />
          <h1 className="text-center w-64 mx-auto py-4 font-semibold text-xl lg:text-xs lg:w-40">
            Judul Film 4
          </h1>
        </div>
        <div>
          <img
            className="mx-auto md:mx-4 w-64 h-[23rem]  drop-shadow-lg pt-10 lg:w-44 lg:h-60"
            src="https://picsum.photos/253"
            alt="film"
          />
          <h1 className="text-center w-64 mx-auto py-4 font-semibold text-xl lg:text-xs lg:w-40">
            Judul Film 5
          </h1>
        </div>
      </div>
    );
  }
}

export default OptionFilm;
