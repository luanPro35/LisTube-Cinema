import React, { useState } from "react";
import useDragScroll from "../hooks/useDragScroll";
import { categories } from "../data/categories";

const FilterBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const {
    scrollContainerRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useDragScroll();

  return (
    <div className="py-4 bg-white dark:bg-black sticky top-0 z-10 border-t-2 border-b-2 border-blue-500">
      <div
        ref={scrollContainerRef}
        className="flex items-center space-x-4 overflow-x-auto hide-scrollbar px-4"
        style={{ cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#00f260] via-[#0575e6] to-[#7b2ff7] text-white"
                : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
