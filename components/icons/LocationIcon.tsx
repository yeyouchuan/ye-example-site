import React from "react";

/**
 * Icon from https://iconic.app
 */

const Location = ({
  color = "#D0D0D0",
  size = 18,
  ...props
}: {
  color?: string;
  size?: number;
  [prop: string]: any;
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M18.25 11C18.25 15 12 19.25 12 19.25C12 19.25 5.75 15 5.75 11C5.75 7.5 8.68629 4.75 12 4.75C15.3137 4.75 18.25 7.5 18.25 11Z"
    />
    <circle
      cx="12"
      cy="11"
      r="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export default Location;
