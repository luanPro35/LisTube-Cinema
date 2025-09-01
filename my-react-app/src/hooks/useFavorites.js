// hooks/useFavorites.js
import { useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (movieId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(movieId)) {
        newFavorites.delete(movieId);
      } else {
        newFavorites.add(movieId);
      }
      return newFavorites;
    });
  };

  return { favorites, toggleFavorite };
};
