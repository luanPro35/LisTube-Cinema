import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      year: "2018",
      title: "Khởi đầu",
      desc: "Ý tưởng đầu tiên về một nền tảng giải trí không giới hạn được hình thành.",
    },
    {
      year: "2020",
      title: "Ra mắt",
      desc: "TicsTube chính thức ra mắt phiên bản beta, thu hút 1 triệu người dùng đầu tiên.",
    },
    {
      year: "2022",
      title: "Mở rộng",
      desc: "Phủ sóng toàn cầu trên 50+ quốc gia và giới thiệu nội dung độc quyền.",
    },
    {
      year: "2024",
      title: "Đột phá",
      desc: "Tích hợp công nghệ AI tiên tiến và đạt cột mốc 100 triệu người dùng.",
    },
  ];

  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">
          Hành trình phát triển
        </h2>
        <p className="text-xl text-gray-400">Từ khởi đầu đến hiện tại</p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-500"></div>

        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                }`}
              >
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-colors">
                  <div className="text-yellow-400 font-bold text-xl mb-2">
                    {item.year}
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-gray-900"></div>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
