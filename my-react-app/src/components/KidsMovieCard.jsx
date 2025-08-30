import React from "react";

const KidsMovieCard = () => {
  return (
    <div className="py-8 bg-black px-6">
      <div className="mx-auto rounded-xl overflow-hidden shadow-2xl">
        <div className="md:grid md:grid-cols-2">
          {/* Left side: Image */}
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1478374885/vi/anh/gia-%C4%91%C3%ACnh-vui-v%E1%BA%BB-xem-phim-trong-r%E1%BA%A1p-chi%E1%BA%BFu-phim.jpg?s=612x612&w=0&k=20&c=ovn2jc8vgBzGlEZ8ZGedUO0Eniog1XC0WiB7MgQXSSU="
              alt="Family watching movie"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div
              className="absolute top-0 right-0 h-full w-1/3 bg-[#BA68C8]"
              style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
            ></div>
          </div>

          {/* Right side: Content with new solid color background */}
          <div className="relative flex flex-col justify-center p-12 bg-[#BA68C8] h-full md:-ml-px">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Kids Zone With Special Security
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              ScreenPal's intuitive tools help you capture, create, and share
              videos and images for authentic and effective visual
              communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex gap-4">
                <button className="bg-white text-[#8c4a9e] font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 hover:bg-gray-100">
                  Watch Now
                </button>
                <button className="bg-white/20 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white/30 transform transition-all duration-300 border border-white/50">
                  Download Our App
                </button>
              </div>
            </div>
            <img
              src="https://img.freepik.com/premium-photo/3d-illustration-kid-wallpaper-cartoon-kids-wallpaper-kids-portrait-3d-cute-kids-3d-style_1135385-75095.jpg"
              alt="Cartoon kids"
              className="absolute bottom-10 right-10 w-32 h-32 rounded-full object-cover border-4 border-[#d494e0] shadow-lg hidden lg:block transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsMovieCard;
