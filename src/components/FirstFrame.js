import React from "react";
import "../style.css";

export default function FirstFrame() {

  return (
    <div>
      <div className="blue-circle">
        <svg
          width="692"
          height="446"
          viewBox="0 0 692 446"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M700 129C700 315.672 681.453 446 439 446C196.547 446 0 294.672 0 108C0 -78.6723 207.547 19 450 19C692.453 19 700 -57.6723 700 129Z"
            fill="#1D3BA8"
          />
        </svg>
      </div>
      <svg
        className="white-oval"
        width="706"
        height="446"
        viewBox="0 0 706 446"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M845.256 112C845.256 287.627 831.47 554 608 554C384.53 554 0 225.627 0 50C154 -112 217.158 -206 440.628 -206C664.098 -206 845.256 -63.6266 845.256 112Z"
          fill="white"
        />
      </svg>

      <div className="media-illustration" />

      <div className="text">
        <h3 className="landing-title">The media won’t control you anymore</h3>
        <p className="landing-paragraph" >With ideamarket you will vote using dollars for who’s trustworthy and should be listened to</p>
      </div>
    </div>
  );
}
