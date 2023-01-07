import React from "react";

/**
 * Icon from https://iconic.app
 */

const Location = ({
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
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
    {...props}
  >
    <path
      d="M10 5.74138C10 8.77586 5.5 12 5.5 12C5.5 12 1 8.77586 1 5.74138C1 3.08621 3.11413 1 5.5 1C7.88586 1 10 3.08621 10 5.74138Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Location;
