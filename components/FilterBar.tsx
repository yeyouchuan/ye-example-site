import React from "react";
import classnames from "classnames";

import { CATEGORIES } from "./PostLayout";

const FilterButton = ({
  children,
  onClick,
  selected = false,
}: {
  children: React.ReactNode;
  onClick: any;
  selected?: boolean;
}) => (
  <button
    className="rounded-full transition-all hover:border-green cursor-pointer px-5 py-2 text-gray-dark text-xs bg-white border border-gray-light"
    style={{
      boxShadow: selected ? "0px 0px 14px rgba(0, 255, 25, 0.80)" : "",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

const FilterBar = ({
  onLayoutToggle,
  onSelectFilter,
  selectedFilter = "",
}: {
  onLayoutToggle: any;
  onSelectFilter: any;
  selectedFilter: string;
}) => {
  return (
    <div className="flex flex-row items-center justify-center mb-2 gap-4">
      <div className="flex flex-row gap-3 w-full flex-wrap">
        <FilterButton
          selected={selectedFilter === ""}
          onClick={() => onSelectFilter("")}
        >
          Everything
        </FilterButton>
        {Object.keys(CATEGORIES).map((cat) => (
          <FilterButton
            selected={selectedFilter === cat}
            key={cat}
            onClick={() => onSelectFilter(cat)}
          >
            {cat}
          </FilterButton>
        ))}
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
};

export default FilterBar;
