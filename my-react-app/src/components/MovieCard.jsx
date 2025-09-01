// components/MovieCard.jsx
import React from "react";
import { Play, Star, Calendar, Clock, Heart, Share2 } from "lucide-react";

const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      {/* Movie Poster */}
      <div className="relative overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:scale-110">
            <Play size={32} fill="currentColor" />
          </button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1 shadow-lg">
          <Star size={14} fill="currentColor" />
          {movie.rating}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <button
            onClick={() => onToggleFavorite(movie.id)}
            className={`p-2 rounded-full shadow-lg transition-colors duration-200 ${
              isFavorite
                ? "bg-red-600 text-white"
                : "bg-white/20 text-white hover:bg-red-600"
            }`}
          >
            <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
          </button>
          <button className="bg-white/20 text-white p-2 rounded-full shadow-lg hover:bg-purple-600 transition-colors duration-200">
            <Share2 size={16} />
          </button>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-purple-300 transition-colors">
            {movie.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
            {movie.description}
          </p>
        </div>

        {/* Movie Details */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{movie.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{movie.duration}</span>
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {movie.genre.slice(0, 3).map((genre, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Watch Button */}
        <button className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
