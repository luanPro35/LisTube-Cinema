import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import VideoShort from "./components/VideoShort.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TopTrending from "./components/topTrending.jsx";
import RecentLiveVideos from "./components/RecentLiveVideos.jsx";
import LatestMovies from "./components/LatestMovies.jsx";
import KidsMovieCard from "./components/KidsMovieCard.jsx";
import RecommendedMovies from "./components/RecommendedMovies.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-[280px] overflow-hidden bg-b">
        <Header />
        <HeroSection />
        <VideoShort />
        <FilterBar />
        <TopTrending />
        <RecentLiveVideos />
        <LatestMovies />
        <KidsMovieCard />
        <RecommendedMovies />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
