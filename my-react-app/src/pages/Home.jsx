import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import VideoShort from "../components/VideoShort.jsx";
import TopTrending from "../components/topTrending.jsx";
import RecentLiveVideos from "../components/RecentLiveVideos.jsx";
import LatestMovies from "../components/LatestMovies.jsx";
import KidsMovieCard from "../components/KidsMovieCard.jsx";
import RecommendedMovies from "../components/RecommendedMovies.jsx";
import Blog from "../components/Blog.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <VideoShort />
      <TopTrending />
      <RecentLiveVideos />
      <LatestMovies />
      <KidsMovieCard />
      <RecommendedMovies />
      <Blog></Blog>
      <Footer></Footer>
    </>
  );
};

export default Home;
