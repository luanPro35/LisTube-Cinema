import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
const App = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-[280px]">
        {" "}
        <Header /> <HeroSection />
        <div style={{ height: "1500px", background: "rgb(0, 0, 0)" }}>
          Scroll down to see the effect
        </div>
      </div>
    </div>
  );
};

export default App;
