import React from "react";

const HeroSectionDecorativeElements = ({ themeColor }) => {
  return (
    <>
      <div
        className={`absolute top-1/4 left-10 w-3 h-3 bg-${themeColor}-500 rounded-full animate-pulse opacity-60`}
      ></div>
      <div className="absolute top-3/4 right-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-1000 opacity-60"></div>
      <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-2000 opacity-60"></div>
    </>
  );
};

export default HeroSectionDecorativeElements;
