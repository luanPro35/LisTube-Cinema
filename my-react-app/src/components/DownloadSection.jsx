import React from "react";
import {
  FaAppStore,
  FaGooglePlay,
  FaVideo,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const DownloadSection = () => (
  <div className="relative py-20 overflow-hidden">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
        }}
      ></div>
    </div>

    <div className="relative z-10 text-center">
      {/* Heading */}
      <div className="mb-8">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-sm mb-6">
          TẢI NGAY HÔM NAY
        </div>
        <h2 className="text-5xl font-black text-white mb-6">
          Trải nghiệm di động tuyệt vời
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Thưởng thức nội dung yêu thích mọi lúc, mọi nơi với ứng dụng TicsTube.
          Tải xuống miễn phí và khám phá thế giới giải trí vô tận.
        </p>
      </div>

      {/* App download buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <a
          href="#"
          className="group relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl font-semibold text-white hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
          <FaAppStore className="text-3xl" />
          <div className="text-left">
            <div className="text-sm text-gray-400">Tải từ</div>
            <div className="text-lg font-bold">App Store</div>
          </div>
        </a>

        <a
          href="#"
          className="group relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl font-semibold text-white hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
          <FaGooglePlay className="text-3xl" />
          <div className="text-left">
            <div className="text-sm text-gray-400">Tải từ</div>
            <div className="text-lg font-bold">Google Play</div>
          </div>
        </a>
      </div>

      {/* Features preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <FaVideo className="text-white text-xl" />
          </div>
          <h4 className="text-white font-bold mb-2">Offline Viewing</h4>
          <p className="text-gray-400 text-sm">Tải về và xem offline mọi lúc</p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <FaStar className="text-white text-xl" />
          </div>
          <h4 className="text-white font-bold mb-2">Smart Recommend</h4>
          <p className="text-gray-400 text-sm">AI gợi ý nội dung phù hợp</p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <FaUsers className="text-white text-xl" />
          </div>
          <h4 className="text-white font-bold mb-2">Social Features</h4>
          <p className="text-gray-400 text-sm">
            Chia sẻ và thảo luận cùng bạn bè
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default DownloadSection;
