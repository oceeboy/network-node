import React from "react";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin">
        <svg
          fill="none"
          height="40"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="5"
          />
        </svg>
      </div>
    </div>
  );
}
