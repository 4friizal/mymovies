import React from "react";

function Detail(props) {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        {/* card detail */}
        <div className="flex flex-col w-80 pt-2 pb-4 px-2 mt-10 shadow-xl shadow-slate-600 rounded-lg md:flex-row md:flex-wrap md:w-[48rem] lg:w-auto lg:flex-nowrap lg:mx-10">
          <img
            className="w-64 m-2 rounded-lg mx-auto shadow-lg md:w-60 md:h-30 lg:w-80"
            src={
              props.poster
                ? `https://image.tmdb.org/t/p/w500${props.poster}`
                : "https://via.placeholder.com/500x750?text=No%20Image"
            }
          />
          {/* right content */}
          <div>
            {/* description detail */}
            <div className="mt-10 ml-7 md:mr-10 md:w-96 lg:ml-10 lg:w-auto lg:mt-3">
              <h1 className="text-2xl font-mulish font-bold md:text-3xl lg:text-6xl">
                {props.title}
              </h1>
              <p className="text-sm italic font-extralight font-roboto mt-1 md:text-lg">
                {props.tag}
              </p>
              {/* description */}
              <div className="text-base font-poppins flex justify-between mt-3 md:text-xl">
                <ul>
                  <li>Genre</li>
                  <li>Duration</li>
                  <li>Popularity</li>
                  <li>Status</li>
                  <li>Budget</li>
                  <li>Revenue</li>
                </ul>
                <ul className="">
                  <li>:</li>
                  <li>:</li>
                  <li>:</li>
                  <li>:</li>
                  <li>:</li>
                  <li>:</li>
                </ul>
                <ul className="mr-6 text-right lg:mr-40">
                  <li>-</li>
                  <li>
                    {Math.floor(props.time / 60)} hours {props.time % 60} minute
                  </li>
                  <li>{props.populer}</li>
                  <li>{props.status}</li>
                  <li>${props.budget}</li>
                  <li>${props.revenue}</li>
                </ul>
              </div>
            </div>
            {/* overview */}
            <div className="hidden lg:inline-block">
              <h1 className="text-4xl ml-4 mt-8 mb-2 md:text-5xl md:mb-6 lg:mb-3 lg:ml-10 lg:mt-4">
                OverView
              </h1>
              <p className="text-sm font-roboto text-justify mx-5 md:text-lg lg:text-xl lg:ml-10">
                &emsp;&emsp;{props.overview}
              </p>
            </div>
          </div>
          <div className="lg:hidden">
            {/* overview */}
            <h1 className="text-4xl ml-4 mt-8 mb-2 md:text-5xl md:mb-6">
              OverView
            </h1>
            <p className="text-sm font-roboto text-justify mx-5 md:text-lg">
              &emsp;&emsp;{props.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
