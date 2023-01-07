import React from "react";

const FilterBar = ({}) => (
  <div className="flex flex-row gap-3">
    <div
      className="rounded-full transition-all hover:bg-green hover:border-green cursor-pointer px-4 py-2 text-gray-dark text-sm bg-white border border-white"
      style={{
        boxShadow: "0px 0px 14px rgba(0, 255, 25, 0.80)",
      }}
    >
      Everything
    </div>
    <div className="rounded-full transition-all hover:bg-green cursor-pointer px-4 py-2 text-gray-dark text-sm bg-white border border-gray-light">
      Posts
    </div>
    <div className="rounded-full transition-all hover:bg-green cursor-pointer px-4 py-2 text-gray-dark text-sm bg-white border border-gray-light">
      Blurbs
    </div>
    <div className="rounded-full transition-all hover:bg-green cursor-pointer px-4 py-2 text-gray-dark text-sm bg-white border border-gray-light">
      Work
    </div>
    <div className="rounded-full transition-all hover:bg-green cursor-pointer px-4 py-2 text-gray-dark text-sm bg-white border border-gray-light">
      Photos
    </div>
  </div>
);

export default FilterBar;
