import React from "react";
import "../style.css";

export default function WatchButton() {
  return (
    <div className="watch-button blue-border-rect d-flex justify-content-center">
      <div className="watch-triangle">
        <svg
          width="13"
          height="18"
          viewBox="0 0 13 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.500008 17.0239V0.976117L11.6443 9L0.500008 17.0239Z"
            fill="white"
            stroke="#1D3BA8"
          />
        </svg>
      </div>

      <h5 className="blue-small-title">Watch Video</h5>
    </div>
  );
}
