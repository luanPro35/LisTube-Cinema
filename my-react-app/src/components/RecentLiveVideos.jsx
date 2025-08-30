import { useRef } from "react";
import useDragScroll from "../hooks/useDragScroll";
import VideoCard from "./VideoCard";
import { recentLiveVideos } from "../data/recentLive.js";
import "../styles/components/RecentLiveVideos.css";

const RecentLiveVideos = () => {
  const containerRef = useRef(null);
  const {
    scrollContainerRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useDragScroll();

  return (
    <div
      ref={containerRef}
      className="relative mx-auto px-8 py-8 bg-black text-white overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center mb-12">
          <div className="relative flex items-center">
            {/* Pulsing Live Dot */}
            <div className="relative">
              <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-6 h-6 bg-red-400 rounded-full animate-ping" />
            </div>
            <h1 className="ml-4 text-5xl font-black tracking-wider bg-gradient-to-r from-white via-purple-200 to-red-200 bg-clip-text text-transparent">
              Recent LIVE Videos
            </h1>
          </div>
        </div>

        <div className="relative">
          <div className="relative bg-black rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-8 pb-6 hide-scrollbar"
              style={{ cursor: "grab" }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {recentLiveVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {recentLiveVideos.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentLiveVideos;
