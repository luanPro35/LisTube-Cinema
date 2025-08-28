import React from "react";
import moviesData from "./MovieData";

const MovieSlide = ({ currentMovieIndex, setCurrentMovieIndex }) => {
  const preMovie = () => {
    setCurrentMovieIndex((prev) =>
      prev === 0 ? moviesData.length - 1 : prev - 1
    );
  };

  const nextMovie = () => {
    setCurrentMovieIndex((prev) =>
      prev === moviesData.length - 1 ? 0 : prev + 1
    );
  };

  const movie = moviesData[currentMovieIndex];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={preMovie}>Prev</button>
      <div style={{ margin: "0 10px" }}>{movie?.title}</div>
      <button onClick={nextMovie}>Next</button>
    </div>
  );
};

export default MovieSlide;
