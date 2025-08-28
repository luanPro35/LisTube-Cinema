import React from "react";

function HeroSectionNavigation({
  moviesData,
  currentMovieIndex,
  setCurrentMovieIndex,
  movieData,
}) {
  return (
    <div className="flex gap-2 pt-8">
      {moviesData.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentMovieIndex(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentMovieIndex
              ? `bg-${movieData.themeColor}-500 scale-125`
              : "bg-white/30 hover:bg-white/50"
          }`}
        />
      ))}
    </div>
  );
}

export default HeroSectionNavigation;
