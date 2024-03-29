import React from "react";
import { AnimatePresence } from "framer-motion";
import GridIcon from "@/components/icons/GridIcon";
import RowsIcon from "@/components/icons/RowsIcon";
import { CATEGORIES } from "@/types";

const FilterButton: React.FC<{
  alt: string;
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
}> = ({ alt, children, onClick, selected = false }) => (
  <button
    className="rounded-full transition-all ease-in-out cursor-pointer px-2.5 py-1.5 text-gray-dark text-xs border transition-all ease-in-out"
    style={{
      backgroundColor: "transparent",
      borderColor: selected ? "#353535" : "#D1D1D1",
      color: selected ? "#353535" : "#D1D1D1",
    }}
    onClick={onClick}
    aria-label={alt}
  >
    {children}
  </button>
);

const FilterBar = ({
  onLayoutToggle,
  onSelectFilter,
  selectedFilter = "",
  isGrid = false,
}: {
  onLayoutToggle: () => void;
  onSelectFilter: (filter: string) => void;
  selectedFilter: string;
  isGrid?: boolean;
}) => (
  <div className="flex flex-row items-end md:items-center justify-center mb-2 gap-4">
    <div className="flex flex-row gap-2 w-full flex-wrap">
      <FilterButton
        alt="Everything"
        selected={selectedFilter === ""}
        onClick={() => onSelectFilter("")}
      >
        Everything
      </FilterButton>
      {Object.keys(CATEGORIES).map((cat) => (
        <FilterButton
          alt={cat}
          selected={selectedFilter === cat}
          key={cat}
          onClick={() => onSelectFilter(cat)}
        >
          {cat}
          {cat !== "Work" && "s"}
        </FilterButton>
      ))}
    </div>
    <div>
      <button
        className="text-xs w-fit ml-auto flex-grow-0"
        aria-label="Toggle grid"
        onClick={onLayoutToggle}
      >
        <AnimatePresence>
          {!isGrid && <GridIcon size={24} />}
          {isGrid && <RowsIcon size={24} />}
        </AnimatePresence>
      </button>
    </div>
  </div>
);

export default FilterBar;
