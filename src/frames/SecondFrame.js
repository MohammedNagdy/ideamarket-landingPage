import React from "react";
import "../style.css";
import WatchButton from "../components/WatchButton";
import AddListingButton from "../components/AddListingButton";
import walletMan from "../assets/wallet-character-cropped.png";
import poweredByEth from "../assets/ethereum 1.png";

export default function SecondFrame() {
  return (
    <div className="second-frame">
      <div className="white-rect">
        <div className="sec-text">
          <h3 className="landing-title">
            Based on blockchain to provide security and integrity
          </h3>
          <img className="sec-eth" src={poweredByEth} alt="powered-by-ethereum" />
          <div className="container-fluid row">
            <div className="col">
              <WatchButton />
            </div>
            <div className="col">
              <AddListingButton />
            </div>
          </div>
        </div>
        <img className="pressing-wallet" src={walletMan} alt="wallet-man"/>
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
