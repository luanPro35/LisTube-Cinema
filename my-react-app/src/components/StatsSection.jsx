import React from "react";
import {
  FaFilm,
  FaTv,
  FaTheaterMasks,
  FaPodcast,
  FaVideo,
} from "react-icons/fa";

const StatsSection = ({ counters, formatNumber }) => {
  const stats = [
    {
      icon: FaFilm,
      count: counters.movies,
      label: "Phim điện ảnh",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FaTv,
      count: counters.tvshows,
      label: "Chương trình TV",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaTheaterMasks,
      count: counters.comedy,
      label: "Comedy Show",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaPodcast,
      count: counters.podcast,
      label: "Podcast",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: FaVideo,
      count: counters.shorts,
      label: "Phim ngắn",
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <div className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl opacity-50"></div>
      <div className="relative z-10 p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Con số ấn tượng
          </h2>
          <p className="text-xl text-gray-300">
            Những thành tựu đáng tự hào của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border border-gray-600 hover:border-gray-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>
              <div className="relative z-10 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg`}
                >
                  <stat.icon className="text-white text-2xl" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {formatNumber(stat.count)}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
