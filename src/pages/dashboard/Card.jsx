import React from "react";

const Card = ({ img, title, unit }) => {
  return (
    <div className="border p-3 items-center border-1 flex flex-col justify-center gap-6 w-[246px] rounded">
      <div className="flex gap-6 w-full">
        <div className="p-4 bg-blue-200 rounded-xl h-16 flex items-center justify-center w-16">
          <img className="w-4" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-500 font-[500]">{title}</h1>
          <p className="text-2xl text-gray-500 font-[500]">{unit}</p>
        </div>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-[6px]">
        <div className="bg-blue-500 h-[6px] rounded-full w-[70%]"></div>
      </div>
    </div>
  );
};

export default Card;
