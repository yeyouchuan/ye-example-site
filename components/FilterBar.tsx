import React from "react";

const FilterBar = ({}) => (
  <div className="flex flex-row gap-3">
    <div
      className="rounded-full transition-all hover:bg-green hover:border-green cursor-pointer px-4 py-2 text-gray-dark text-sm bg-white border border-white"
      style={{
        boxShadow: "0px 0px 12px rgba(0, 255, 25, 0.51)",
      }}
    >
      Everything
    </div>
    <div className="rounded-full transition-all hover:bg-green hover:border-green cursor-pointer px-4 py-2 text-gray-dark text-sm bg-white border border-gray-light">
      Writing
    </div>
  </div>
);

export default FilterBar;
