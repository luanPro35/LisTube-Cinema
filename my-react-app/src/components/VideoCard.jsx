import React from "react";
import { FiEye, FiClock } from "react-icons/fi";

const VideoCard = ({ video }) => {
  return (
    <div className="flex-shrink-0 w-80 rounded-lg overflow-hidden shadow-lg bg-gray-800/50 backdrop-blur-sm border border-white/10 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={video.image}
          alt={video.title}
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-md">
          LIVE
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs font-semibold rounded-md flex items-center">
          <FiClock className="mr-1" />
          <span>{video.duration}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate">{video.title}</h3>
        <div className="flex items-center mt-2">
          <img
            className="w-8 h-8 rounded-full mr-3 border-2 border-purple-500 hover:border-red-500 transition-colors"
            src={`https://i.pravatar.cc/40?u=${video.streamer}`}
            alt={video.streamer}
          />
          <div>
            <p className="text-sm font-semibold text-gray-300">
              {video.streamer}
            </p>
            <div className="flex items-center text-xs text-gray-400">
              <FiEye className="mr-1" />
              <span>{video.viewers} viewers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
