import React from "react";

const About = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Về LisTube</h1>

        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            LisTube - Nền Tảng Giải Trí Hàng Đầu
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            LisTube là nền tảng giải trí trực tuyến hàng đầu, cung cấp cho người
            dùng trải nghiệm xem phim, video và nội dung giải trí chất lượng
            cao. LisTube cam kết mang đến những nội dung đa dạng, phong phú phù
            hợp với mọi lứa tuổi và sở thích.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Với giao diện thân thiện, dễ sử dụng và công nghệ tiên tiến, LisTube
            đã trở thành lựa chọn hàng đầu của hàng triệu người dùng trên toàn
            thế giới.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Tầm Nhìn</h3>
            <p className="text-gray-300">
              Trở thành nền tảng giải trí số 1, kết nối mọi người thông qua nội
              dung chất lượng và trải nghiệm người dùng tuyệt vời.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Sứ Mệnh</h3>
            <p className="text-gray-300">
              Cung cấp nội dung giải trí đa dạng, an toàn và chất lượng cao,
              mang lại niềm vui và sự thư giãn cho mọi người.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            Tính Năng Nổi Bật
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Kho phim và video đa dạng, cập nhật liên tục</li>
            <li>• Giao diện thân thiện, dễ sử dụng</li>
            <li>• Chất lượng video cao, hỗ trợ nhiều độ phân giải</li>
            <li>• Hệ thống đề xuất thông minh</li>
            <li>• Hỗ trợ đa nền tảng</li>
            <li>• Bảo mật thông tin người dùng</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
