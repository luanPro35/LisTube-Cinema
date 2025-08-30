import React from "react";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  return (
    <div className="mx-auto px-6 pt-0 bg-black">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            From Our Blog
          </h2>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-[#00f260] hover:via-[#0575e6] hover:to-[#7b2ff7] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 border border-gray-600">
          Read All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
