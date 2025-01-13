import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="box"></div>
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default Loader;
