import React from "react";

const Shimmer = () => {
  return (
    <div className="px-4 py-6 max-w-3xl mx-auto">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-start gap-4 p-3 mb-4 border-b border-gray-200 animate-pulse"
        >
          <div className="w-8/12">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
          </div>

          <div className="w-3/12 h-[100px] bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
