import { FaPlay } from "react-icons/fa";
import { topTrendingAlternative } from "../data/topTrending";
import useDragScroll from "../hooks/useDragScroll";

const TopTrending = () => {
  const {
    scrollContainerRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useDragScroll();

  return (
    <div className="mx-auto px-6 py-10 bg-black">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg">
            <FaPlay className="text-white text-xl ml-1" />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            Top Trending Videos
          </h2>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-[#00f260] hover:via-[#0575e6] hover:to-[#7b2ff7] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 border border-gray-600">
          View All
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar"
        style={{ cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {topTrendingAlternative.map((video) => (
          <div
            key={video.id}
            className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 flex-shrink-0 w-80 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden h-64 sm:h-72">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <FaPlay className="text-gray-900 text-xl ml-1" />
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
                {video.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {video.view}
                </span>
                <span className="text-xs bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full font-medium shadow">
                  Short
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrending;
