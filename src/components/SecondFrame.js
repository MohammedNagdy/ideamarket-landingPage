import React from "react";
import "../style.css";
import WatchButton from "./WatchButton";
import AddListingButton from "./AddListingButton";

export default function SecondFrame() {
  return (
    <div>
      <div className="white-rect">
        <div className="sec-text">
          <h3 className="landing-title">
            Based on blockchain to provide security and integrity
          </h3>
          <div className="container-fluid row">
            <div className="col">
              <WatchButton />
            </div>
            <div className="col">
              <AddListingButton />
            </div>
          </div>
        </div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1024 347"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className="white-rect" y="0.233261" width="1280" height="747" />
        </svg>
      </div>
    </div>
  );
}
