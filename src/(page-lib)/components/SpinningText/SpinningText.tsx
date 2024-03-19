import React from "react";

const SpinningText = ({ text, children }) => {
  const lenght = text.length;
  const deg = 360 / lenght;
  return (
    <div
      className="text-base rounded-full -mt-44 hover:cursor-pointer "
      id="spinnging-text-wrapper"
    >
      <div
        //className="absolute w-full h-full m-0 animate-spin-slow"
        id="spinning-text"
      >
        <p className="text-base text-slate-200">
          {text.split("").map((word, i) => (
            <span
              className="top-0 left-1/2"
              key={i}
              style={{ transform: `rotate(${deg * i}deg) translateY(-150%)` }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
      {children}
    </div>
  );
};
export default SpinningText;
