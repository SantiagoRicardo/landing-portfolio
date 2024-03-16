import React from "react";

const SpinningText = ({ text }) => {
  const lenght = text.length;
  const deg = 360 / lenght;
  return (
    <div
      className="hover:cursor-pointer text-base text-slate-900 font absolute w-[220px] h-[220px] bg-[#DCFD15] rounded-full grid place-items-center"
      id="spinnging-text-wrapper"
    >
      <div
        //className="absolute w-full h-full m-0 animate-spin-slow"
        id="spinning-text"
      >
        <p className="text-xs text-slate-950">
          {text.split("").map((word, i) => (
            <span
              className="top-0 left-1/2"
              key={i}
              style={{ transform: `rotate(${deg * i}deg) translateY(-50%)` }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
export default SpinningText;
