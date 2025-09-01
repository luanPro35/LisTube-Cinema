// MovieTab.jsx - Main Component
import React, { useState } from "react";
import TabNavigation from "../components/TabNavigationMovie";
import MovieGrid from "../components/MovieGrid";
import { movieData, tabs } from "../data/movieData";
import { useFavorites } from "../hooks/useFavorites";
import Footer from "../components/Footer";

const Movie = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const { favorites, toggleFavorite } = useFavorites();

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const currentMovies = movieData[activeTab] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
              Amazing
            </span>{" "}
            Movies
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our vast collection of movies across different categories.
            Find your next favorite film today!
          </p>
        </div>

        {/* Tab Navigation */}
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* Movies Grid */}
        <MovieGrid
          movies={currentMovies}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Movies
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Movie;
