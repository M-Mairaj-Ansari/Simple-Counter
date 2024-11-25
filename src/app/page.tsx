"use client"

import React from "react";
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="flex justify-center items-center h-screen">
       
      <div className=" border-2 border-black rounded-lg w-[300px] px-4 text-center"> 
      <h1 className="text-2xl font-bold pt-2">COUNTER</h1>
        <h1 className="text-2xl font-bold bg-slate-200 mb-4 mt-4 w-full h-[40px] border-2 text-right pr-2">{counter}</h1>
        <div>
          <button
            onClick={incrementCounter}
            className="bg-blue-500 text-white px-4 py-2 rounded m-3 mb-5"
          >
            Add
          </button>
          <button
            onClick={resetCounter}
            className="bg-red-500 text-white px-4 py-2 rounded m-3"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
