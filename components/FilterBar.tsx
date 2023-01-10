import React from "react";

const FilterBar = ({ onLayoutToggle }: { onLayoutToggle: any }) => (
  <div className="flex flex-row items-center justify-center mb-2 gap-4">
    <div className="flex flex-row gap-3 w-full flex-wrap">
      <div
        className="rounded-full transition-all hover:border-green hover:border-green cursor-pointer px-5 py-2 text-gray-dark text-xs bg-white border border-white"
        style={{
          boxShadow: "0px 0px 14px rgba(0, 255, 25, 0.80)",
        }}
      >
        Everything
      </div>
      <div className="rounded-full transition-all hover:border-green cursor-pointer px-5 py-2 text-gray-dark text-xs bg-white border border-gray-light">
        Posts
      </div>
      <div className="rounded-full transition-all hover:border-green cursor-pointer px-5 py-2 text-gray-dark text-xs bg-white border border-gray-light">
        Blurbs
      </div>
      <div className="rounded-full transition-all hover:border-green cursor-pointer px-5 py-2 text-gray-dark text-xs bg-white border border-gray-light">
        Work
      </div>
      <div className="rounded-full transition-all hover:border-green cursor-pointer px-5 py-2 text-gray-dark text-xs bg-white border border-gray-light">
        Photos
      </div>
    </div>
    <div>
      <button
        className="text-xs w-fit ml-auto flex-grow-0"
        onClick={onLayoutToggle}
      >
        Toggle
      </button>
    </div>
  </div>
);

export default FilterBar;
