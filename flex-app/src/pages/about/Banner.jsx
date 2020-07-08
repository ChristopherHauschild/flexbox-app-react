import React from "react";

const Banner = () => {
  return (
    <div
      className="flex m-3 w-full h-64 rounded justify-center items-center"
      style={{ background: "linear-gradient(to right, #485563, #29323c)" }}
    >
      <div className="flex items-center flex-shrink-0 text-white">
        <i className="fa fa-cube fa-4x" aria-hidden="true"></i>
        <span className="ml-3 text-2xl sm:text-4xl tracking-tight">
          Flexbox Simulator
        </span>
      </div>
    </div>
  );
};

export default Banner;
