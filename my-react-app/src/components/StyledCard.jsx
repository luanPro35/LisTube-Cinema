import React from "react";

function StyledCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      {/* Placeholder for an image */}
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600 text-xl">Image Placeholder</span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">Card Title</div>
        <p className="text-gray-700 text-base">
          This is a sample card component styled with Tailwind CSS. It
          demonstrates various utility classes for layout, typography, and
          appearance.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tailwind
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #react
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #css
        </span>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default StyledCard;
