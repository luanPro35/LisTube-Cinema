import React from "react";

const MovieInfo = ({ movieData }) => {
  return (
    <div className="text-white space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-sm font-bold mb-6">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          NOW PLAYING
        </div>

        <h1 className="text-6xl lg:text-7xl font-black mb-4 leading-none">
          <span className="bg-gradient-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent">
            {movieData.title}
          </span>
        </h1>

        <h2 className="text-3xl lg:text-4xl font-bold text-red-400 mb-6">
          {movieData.subtitle}
        </h2>

        <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
          {movieData.description}
        </p>
      </div>

      {/* Movie Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {movieData.rating}
          </div>
          <div className="text-sm text-gray-400">IMDb Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {movieData.duration}
          </div>
          <div className="text-sm text-gray-400">Duration</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {movieData.releaseDate}
          </div>
          <div className="text-sm text-gray-400">Release Year</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-400">4K</div>
          <div className="text-sm text-gray-400">Quality</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-6">
        <button
          className={`group relative px-8 py-4 bg-gradient-to-r from-${movieData.themeColor}-600 to-orange-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-${movieData.themeColor}-500/25`}
        >
          <span className="relative z-10">▶ Watch Now</span>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-${movieData.themeColor}-700 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
          ></div>
        </button>

        <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300">
          🎬 Trailer
        </button>

        <button
          className={`px-8 py-4 border-2 border-${movieData.themeColor}-500/30 text-${movieData.themeColor}-400 font-bold rounded-xl hover:bg-${movieData.themeColor}-500/10 hover:border-${movieData.themeColor}-500/50 transition-all duration-300`}
        >
          + Watchlist
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;
