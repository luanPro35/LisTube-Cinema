import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BsPlay, BsStars } from "react-icons/bs";
import { HiTrendingUp, HiSparkles } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative mt-8 bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-400 rounded-full blur-lg animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-red-500 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-yellow-400 rounded-full blur-md animate-bounce delay-700"></div>
      </div>

      {/* Premium Wave Effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#000000", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#2d1b69", stopOpacity: 0.8 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#1a1a1a", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.5,168.19-17.12,250.45-.39,57.56,11.61,112.16,31.06,169.64,41.86,118.74,22.4,241.06,5.75,286.52-2.71V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-xl p-3 shadow-2xl transform hover:scale-110 transition-all duration-300">
                  <BsPlay className="text-white text-2xl" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <HiSparkles className="text-yellow-400 text-lg animate-pulse" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                LisTube
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Trải nghiệm điện ảnh đỉnh cao với chất lượng 4K HDR và âm thanh
              Dolby Atmos. Khám phá thế giới phim ảnh không giới hạn.
            </p>

            {/* Stats */}
            <div className="flex gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">50K+</div>
                <div className="text-gray-400">Movies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">1M+</div>
                <div className="text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">4.9★</div>
                <div className="text-gray-400">Rating</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BsStars className="text-yellow-400" />
              Khám Phá
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "🎬 Phim Mới Nhất", trend: true },
                { name: "🔥 Phim Hot", trend: true },
                { name: "📺 TV Series" },
                { name: "🎭 Thể Loại" },
                { name: "⭐ Top IMDB" },
                { name: "🏆 Giải Thưởng" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-pink-400 transition-colors duration-300 group"
                  >
                    <span>{item.name}</span>
                    {item.trend && (
                      <HiTrendingUp className="text-green-400 text-xs group-hover:scale-110 transition-transform" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Features */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-ping"></div>
              Dịch Vụ Premium
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { icon: "🎯", name: "Không Quảng Cáo", badge: "VIP" },
                { icon: "📱", name: "Xem Offline", badge: "NEW" },
                { icon: "👥", name: "Chia Sẻ Gia Đình" },
                { icon: "🌍", name: "Phụ Đề Đa Ngôn Ngữ" },
                { icon: "⚡", name: "Streaming 4K HDR" },
                { icon: "🎧", name: "Âm Thanh Dolby" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-purple-400 transition-colors duration-300 group"
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.icon}</span>
                      {item.name}
                    </span>
                    {item.badge && (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item.badge === "VIP"
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                            : "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                        } animate-pulse`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Liên Hệ</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 hover:text-pink-400 transition-colors">
                <MdEmail className="text-pink-400" />
                <span>support@listube.vn</span>
              </div>
              <div className="flex items-center gap-3 hover:text-pink-400 transition-colors">
                <MdPhone className="text-purple-400" />
                <span>1900 8888</span>
              </div>
              <div className="flex items-center gap-3 hover:text-pink-400 transition-colors">
                <MdLocationOn className="text-red-400" />
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3 text-sm">
                📬 Nhận tin tức mới
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email của bạn..."
                  className="flex-1 px-3 py-2 bg-black/30 border border-pink-500/30 rounded-l-lg text-sm focus:outline-none focus:border-pink-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 rounded-r-lg transition-all duration-300 transform hover:scale-105">
                  <MdEmail />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="animate-pulse">🌟</span>
            Kết Nối Với Chúng Tôi
          </h3>
          <div className="flex gap-4">
            {[
              {
                Icon: FaFacebookF,
                color: "hover:bg-blue-600",
                name: "Facebook",
              },
              { Icon: FaTwitter, color: "hover:bg-blue-400", name: "Twitter" },
              {
                Icon: FaInstagram,
                color: "hover:bg-pink-600",
                name: "Instagram",
              },
              { Icon: FaYoutube, color: "hover:bg-red-600", name: "YouTube" },
              { Icon: FaTiktok, color: "hover:bg-black", name: "TikTok" },
              {
                Icon: FaDiscord,
                color: "hover:bg-indigo-600",
                name: "Discord",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <a
                  href="#"
                  className={`flex items-center justify-center w-12 h-12 border-2 border-white/20 rounded-full ${item.color} hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-2xl backdrop-blur-sm`}
                  title={item.name}
                >
                  <item.Icon className="text-lg" />
                </a>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider with Animation */}
        <div className="relative mb-8">
          <hr className="border-gray-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 px-6">
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span>© 2025 LisTube Premium.</span>
            <span className="flex items-center gap-1">
              Được tạo với{" "}
              <span className="text-red-500 animate-pulse">❤️</span> tại Việt
              Nam
            </span>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              "Điều Khoản Sử Dụng",
              "Chính Sách Bảo Mật",
              "Bản Quyền",
              "Hỗ Trợ 24/7",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-pink-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 opacity-30">
        <div className="text-6xl animate-bounce delay-1000">🎬</div>
      </div>
      <div className="absolute top-20 left-1/4 opacity-20">
        <div className="text-4xl animate-pulse delay-500">🍿</div>
      </div>
    </footer>
  );
}
