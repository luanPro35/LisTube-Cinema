import React from "react";
import {
  FaPlay,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaHeart,
  FaAward,
} from "react-icons/fa";

const AboutContent = () => {
  const features = [
    {
      icon: FaRocket,
      title: "Công nghệ tiên tiến",
      desc: "Streaming 4K HDR với AI",
    },
    {
      icon: FaGlobe,
      title: "Toàn cầu",
      desc: "Phục vụ hơn 190 quốc gia",
    },
    {
      icon: FaUsers,
      title: "Cộng đồng",
      desc: "Hơn 100 triệu người dùng",
    },
    {
      icon: FaHeart,
      title: "Trải nghiệm",
      desc: "Giao diện thân thiện, dễ dùng",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
      <div className="space-y-6">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-semibold">
          VỀ CHÚNG TÔI
        </div>
        <h2 className="text-5xl font-bold text-white leading-tight">
          Định nghĩa lại <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            trải nghiệm giải trí
          </span>
        </h2>
        <p className="text-xl text-gray-400 leading-relaxed">
          LisTube không chỉ là một nền tảng streaming thông thường. Chúng tôi là
          cầu nối giữa người sáng tạo và khán giả, mang đến những trải nghiệm
          giải trí đỉnh cao với công nghệ AI tiên tiến và thư viện nội dung
          khổng lồ.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-gray-800 px-4 py-3 rounded-lg"
            >
              <feature.icon className="text-yellow-400 text-xl" />
              <div>
                <div className="text-white font-semibold">{feature.title}</div>
                <div className="text-sm text-gray-400">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <FaPlay className="text-black ml-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Chất lượng cao</h3>
                <p className="text-gray-400">4K HDR, Dolby Atmos</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <FaAward className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Nội dung độc quyền
                </h3>
                <p className="text-gray-400">
                  Sản xuất riêng, chất lượng Hollywood
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <FaUsers className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Cộng đồng sáng tạo
                </h3>
                <p className="text-gray-400">Hỗ trợ creator toàn cầu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
      </div>
    </div>
  );
};

export default AboutContent;
