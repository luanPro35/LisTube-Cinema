import React from "react";

function Button({ children, onClick, className, type = "button" }) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500",
    danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${
        variantStyles[className] || variantStyles.primary
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
