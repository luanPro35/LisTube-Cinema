import React, { useState, useEffect } from "react";

const MovieCard3D = ({ movieData }) => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, rotation: 0 });
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

  useEffect(() => {
    if (!isHovered && !isDragging) {
      const interval = setInterval(() => {
        setRotation((prev) => prev + 0.5);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHovered, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      rotation: rotation,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const rotationDelta = deltaX * 0.5; // Sensitivity
      setRotation(dragStart.rotation + rotationDelta);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].clientX,
      rotation: rotation,
    });
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const deltaX = e.touches[0].clientX - dragStart.x;
      const rotationDelta = deltaX * 0.5;
      setRotation(dragStart.rotation + rotationDelta);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isDragging, dragStart]);

  const handleCardClick = () => {
    if (!isDragging) {
      setRotation((prev) => prev + 90);
    }
  };

  return (
    <div className="flex justify-center">
      <div
        className="relative cursor-pointer select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        <div
          className="relative w-80 h-[520px]"
          style={{
            perspective: "1000px",
            transform: `rotateY(${mousePos.x * 0.02 - 1}deg) rotateX(${
              mousePos.y * 0.02 - 1
            }deg)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div
            className="relative w-full h-full preserve-3d"
            style={{
              transform: `rotateY(${rotation}deg)`,
              transition: isDragging
                ? "none"
                : "transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
            }}
          >
            {/* Card Thickness */}
            <div className="absolute inset-0">
              <div
                className="absolute w-full h-4 bg-gradient-to-r from-gray-700 to-gray-600"
                style={{
                  transform: "rotateX(90deg) translateZ(2px)",
                  transformOrigin: "top",
                }}
              />
              <div
                className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-gray-800 to-gray-700"
                style={{
                  transform: "rotateX(-90deg) translateZ(2px)",
                  transformOrigin: "bottom",
                }}
              />
              <div
                className="absolute left-0 w-4 h-full bg-gradient-to-b from-gray-700 to-gray-800"
                style={{
                  transform: "rotateY(-90deg) translateZ(2px)",
                  transformOrigin: "left",
                }}
              />
              <div
                className="absolute right-0 w-4 h-full bg-gradient-to-b from-gray-600 to-gray-700"
                style={{
                  transform: "rotateY(90deg) translateZ(2px)",
                  transformOrigin: "right",
                }}
              />
            </div>

            {/* Front Face */}
            <div
              className={`absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl border border-${movieData.themeColor}-500/30`}
              style={{ transform: "translateZ(2px)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src={movieData.frontImage}
                alt={movieData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex items-center gap-2 text-yellow-400 mb-3">
                  <span className="text-lg">★</span>
                  <span className="font-bold text-lg">{movieData.rating}</span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {movieData.title}
                </h3>
                <p
                  className={`text-${movieData.themeColor}-300 text-lg font-semibold`}
                >
                  {movieData.subtitle}
                </p>
              </div>
            </div>

            {/* Back Face */}
            <div
              className={`absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-2xl border border-${movieData.themeColor}-500/30`}
              style={{ transform: "rotateY(180deg) translateZ(2px)" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${movieData.themeColor}-900/90 via-black/90 to-gray-900/90 z-10`}
              />
              <img
                src={movieData.backImage}
                alt={movieData.title}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-6 z-20 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">
                    {movieData.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {movieData.description}
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Genre:</span>
                    <span className={`text-${movieData.themeColor}-300`}>
                      {movieData.genre}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{movieData.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Release:</span>
                    <span className="text-white">{movieData.releaseDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Side Face */}
            <div
              className={`absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl border border-${movieData.themeColor}-500/30`}
              style={{ transform: "rotateY(-90deg) translateZ(2px)" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-gray-800 via-${movieData.themeColor}-900 to-black`}
              />
              <div className="absolute inset-6 flex flex-col justify-center text-center">
                <h3 className="text-white text-lg font-bold mb-4">Director</h3>
                <p
                  className={`text-${movieData.themeColor}-300 text-xl font-semibold mb-6`}
                >
                  {movieData.director}
                </p>
                <div className="space-y-2">
                  <h4 className="text-gray-400 text-sm">Main Cast</h4>
                  {movieData.cast.map((actor, index) => (
                    <p key={index} className="text-white text-sm">
                      {actor}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Face */}
            <div
              className={`absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl border border-${movieData.themeColor}-500/30`}
              style={{ transform: "rotateY(90deg) translateZ(2px)" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${movieData.themeColor}-800 via-gray-900 to-black`}
              />
              <div className="absolute inset-6 flex flex-col justify-center items-center text-center">
                <div className="text-6xl font-bold text-yellow-400 mb-2">★</div>
                <div className="text-4xl font-bold text-white mb-2">
                  {movieData.rating}
                </div>
                <div className="text-gray-300 text-sm mb-6">IMDb Rating</div>
                <div
                  className={`text-${movieData.themeColor}-300 text-lg font-semibold`}
                >
                  {movieData.genre}
                </div>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div
            className={`absolute -inset-6 bg-gradient-to-r from-${movieData.themeColor}-500/20 via-orange-500/20 to-yellow-500/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard3D;
