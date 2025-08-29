import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import VideoShort from "./components/VideoShort.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TopTrending from "./components/topTrending.jsx";
const App = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-[280px] overflow-hidden">
        <Header />
        <HeroSection />
        <VideoShort />
        <FilterBar />
        <TopTrending />
      </div>
    </div>
  );
};

export default App;
