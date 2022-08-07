/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { requests } from "./UnsplashApi";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

function App() {
  const [pics, setPics] = useState<any[]>([]);

  useEffect(() => {
    loadUnsplash();
  }, []);

  const loadUnsplash = async () => {
    const response = await axios.get(requests.getLakes);
    setPics(response.data.results);
  };

  const poster = pics[Math.floor(Math.random() * pics.length)];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (!slider) return;
    slider!.scrollLeft -= 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (!slider) return;
    slider!.scrollLeft += 500;
  };

  return (
    <>
      <div className="m-4 relative flex items-center w-full h-full">
        <h1 className="absolute uppercase lg:text-5xl text-4xl font-bold text-gray-200 opacity-80">
          <span className=" lg:text-8xl text-7xl text-gray-300">F</span>
          ind your own peace, Paul
        </h1>
        <img
          className="w-full h-full object-cover rounded max-h-[800px]"
          src={poster?.urls?.full}
          alt="poster img"
        />
        <div className="w-full h-full bg-black/10 absolute  max-h-[800px]"></div>
      </div>
      <div className="relative flex items-center w-full h-full ">
        <IoArrowBackOutline
          className="cursor-pointer opacity-50 hover:opacity-100 bg-white "
          onClick={slideLeft}
          size="30px"
        />
        <div
          id="slider"
          className="w-full h-full space-x-2 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {pics.map((pic) => {
            return (
              <img
                className="w-[220px] h-[150px] object-cover rounded hover:scale-105 inline-block ease-in-out duration-250 	"
                key={pic?.id}
                src={pic?.urls?.small}
                alt="horizontal image"
              />
            );
          })}
        </div>
        <IoArrowForwardOutline
          className="cursor-pointer opacity-50 hover:opacity-100 bg-white rounded"
          onClick={slideRight}
          size="30px"
        />
      </div>
    </>
  );
}

export default App;
