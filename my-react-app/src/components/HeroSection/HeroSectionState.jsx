import { useState, useRef } from "react";
import moviesData from "./MovieData";

function HeroSectionState() {
  const [rotation, setRotation] = useState(0);
  const [mousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const movieData = moviesData[currentMovieIndex];

  let isDragging = false;

  const handleCardClick = () => {
    if (!isDragging) {
      setRotation((prev) => prev + 90);
    }
  };

  return {
    rotation,
    setRotation,
    mousePos,
    canvasRef,
    currentMovieIndex,
    setCurrentMovieIndex,
    movieData,
    isDragging,
    handleCardClick,
  };
}

export default HeroSectionState;
