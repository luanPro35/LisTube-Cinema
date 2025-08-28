import React, { useState, useEffect } from "react";

const HeroSectionBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-white/3 select-none"
        style={{
          transform: `translate(${mousePos.x * 0.05 - 2.5}px, ${
            mousePos.y * 0.05 - 2.5
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        MOVIE
      </div>
    </div>
  );
};

export default HeroSectionBackground;
