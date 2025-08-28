import React, { useState } from "react";
import moviesData from "./MovieData";
import CanvasBackground from "./CanvasBackground";
import MovieCard3D from "./MovieCard3D";
import MovieInfo from "./MovieInfo";
import HeroSectionMovieNavigation from "./HeroSectionMovieNavigation";
import HeroSectionDecorativeElements from "./HeroSectionDecorativeElements";
import HeroSectionBackground from "./HeroSectionBackground";
import MovieSlide from "./MovieSlide";

function HeroSection() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const movieData = moviesData[currentMovieIndex];

  const handlePrev = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === 0 ? moviesData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === moviesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br ${movieData.bgGradient} overflow-hidden transition-all duration-1000`}
    >
      <CanvasBackground themeColor={movieData.themeColor} />
      <HeroSectionBackground />
      <MovieSlide
        currentMovieIndex={currentMovieIndex}
        setCurrentMovieIndex={setCurrentMovieIndex}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MovieCard3D movieData={movieData} />
            <div>
              <MovieInfo movieData={movieData} />
              <HeroSectionMovieNavigation
                moviesData={moviesData}
                currentMovieIndex={currentMovieIndex}
                setCurrentMovieIndex={setCurrentMovieIndex}
                themeColor={movieData.themeColor}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 p-3 bg-white/10 border-2 border-white/20 rounded-full text-white font-bold hover:bg-white/20 transition-all duration-300 focus:outline-none"
        aria-label="Previous movie"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 p-3 bg-white/10 border-2 border-white/20 rounded-full text-white font-bold hover:bg-white/20 transition-all duration-300 focus:outline-none"
        aria-label="Next movie"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <HeroSectionDecorativeElements themeColor={movieData.themeColor} />
    </div>
  );
}

export default HeroSection;
