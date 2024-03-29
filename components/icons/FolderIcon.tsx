import React from "react";

/**
 * Icon from https://iconic.app
 */

const Folder: React.FC<{
  color?: string;
  size?: number;
  [prop: string]: any;
}> = ({ color = "#D0D0D0", size = 18, ...props }) => (
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
      strokeWidth="1"
      d="M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H4.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"
    />
  </svg>
);

export default Folder;
