import React from "react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used for navigation

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MyApp</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-600 hover:text-blue-600">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
