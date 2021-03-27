import React from "react";
import "../style.css";
import white from "../assets/white-eclipse.png";
import media from "../assets/Shiny Happy Online Dating.png";

export default function FirstFrame() {

  return (
    <div className="first-frame">

      <img className="media-talk" src={media} alt="media"/>
        <img className="white-oval" src={white} alt=""/>


      <div className="text">
        <h3 className="landing-title">The media won’t control you anymore</h3>
        <p className="landing-paragraph" >With ideamarket you will vote using dollars for who’s trustworthy and should be listened to</p>
      </div>
    </div>
  );
}
