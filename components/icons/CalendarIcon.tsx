import React from "react";

/**
 * Icon from https://iconic.app
 */

const Calendar = ({
  color = "#D0D0D0",
  size = 16,
  ...props
}: {
  color?: string;
  size?: number;
  [prop: string]: any;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
    {...props}
  >
    <path
      d="M1.1665 3.83333C1.1665 3.09695 1.76346 2.5 2.49984 2.5H9.49984C10.2362 2.5 10.8332 3.09695 10.8332 3.83333V9.5C10.8332 10.2364 10.2362 10.8333 9.49984 10.8333H2.49984C1.76346 10.8333 1.1665 10.2364 1.1665 9.5V3.83333Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.3335 1.16663V3.49996"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.6665 1.16663V3.49996"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.1665 5.16663H8.83317"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Calendar;
