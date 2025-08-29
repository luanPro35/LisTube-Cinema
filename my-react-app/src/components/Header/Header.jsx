import { FaBell, FaUpload, FaGem, FaEnvelope, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div
      id="header-section"
      className="fixed top-0 left-[280px] right-0 h-24 flex items-center justify-between px-6 bg-transparent text-white shadow-md z-50"
    >
      <div className="relative w-1/2">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-transparent border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search Your Videos"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 rounded-full hover:bg-gray-700 transition border-4 border-gray-600">
          <FaBell size={20} />
        </button>

        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gradient-to-r hover:from-[#00f260] hover:via-[#0575e6] hover:to-[#7b2ff7] rounded-lg transition border-2 border-gray-600">
          Upload <FaUpload />
        </button>

        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gradient-to-r hover:from-[#00f260] hover:via-[#0575e6] hover:to-[#7b2ff7] rounded-lg transition border-2 border-gray-600">
          Subscribe <FaGem />
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition border-2 border-gray-600 bg-gradient-to-r from-[#00f260] via-[#0575e6] to-[#7b2ff7]">
          Profile <FaEnvelope />
        </button>
      </div>
    </div>
  );
};

export default Header;
