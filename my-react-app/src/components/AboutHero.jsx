import React from "react";
import { FaChevronRight, FaHome, FaStar } from "react-icons/fa";

const AboutHero = ({ isVisible }) => (
  <div className="relative h-screen overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>

    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
      <div
        className={`transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className="mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-semibold text-sm mb-4">
            <FaStar className="mr-2" />
            #1 Entertainment Platform
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          LISUTUBE
        </h1>

        <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-4xl mx-auto font-light">
          Nền tảng giải trí hàng đầu với{" "}
          <span className="text-yellow-400 font-semibold">hàng triệu</span> nội
          dung chất lượng cao
        </p>

        <div className="flex items-center justify-center mt-8 text-lg">
          <div className="flex items-center bg-black bg-opacity-30 px-6 py-3 rounded-full backdrop-blur-sm">
            <FaHome className="mr-2 text-yellow-400" />
            <span className="hover:text-yellow-400 transition-colors cursor-pointer">
              Home
            </span>
            <FaChevronRight className="mx-3 text-gray-500" />
            <span className="text-yellow-400">About</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutHero;
