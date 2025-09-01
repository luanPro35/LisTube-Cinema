import React, { useState, useEffect } from "react";
import HeroSection from "../components/AboutHero";
import AboutContent from "../components/AboutContent";
import StatsSection from "../components/StatsSection";
import MissionVision from "../components/MissionVision";
import DownloadSection from "../components/DownloadSection";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    movies: 0,
    tvshows: 0,
    comedy: 0,
    podcast: 0,
    shorts: 0,
  });

  useEffect(() => {
    setIsVisible(true);

    const targets = {
      movies: 254369,
      tvshows: 694302,
      comedy: 103001,
      podcast: 50332,
      shorts: 995999,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach((key) => {
      let current = 0;
      const increment = targets[key] / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });
  }, []);

  const formatNumber = (num) => num.toLocaleString();

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <HeroSection isVisible={isVisible} />

      <div className="container mx-auto px-6 py-20">
        <AboutContent />
        <StatsSection counters={counters} formatNumber={formatNumber} />
        <MissionVision />
        <DownloadSection />
        <Timeline />
      </div>

      <Footer />
    </div>
  );
};

export default About;
