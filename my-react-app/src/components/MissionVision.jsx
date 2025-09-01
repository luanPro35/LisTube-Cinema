import React from "react";
import { FaRocket, FaStar } from "react-icons/fa";

const MissionVision = () => (
  <div className="py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
            <FaRocket className="text-black text-2xl" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Sứ mệnh</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Tạo ra một thế giới giải trí không giới hạn, nơi mọi người có thể
            khám phá, chia sẻ và tận hưởng những nội dung tuyệt vời nhất từ khắp
            nơi trên thế giới.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
            <FaStar className="text-white text-2xl" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Tầm nhìn</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Trở thành nền tảng giải trí số 1 thế giới, kết nối mọi người thông
            qua những câu chuyện đầy cảm hứng và trải nghiệm giải trí đỉnh cao.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MissionVision;
