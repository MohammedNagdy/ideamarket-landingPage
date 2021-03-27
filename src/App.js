import React from "react";
import "./style.css";
import FirstFrame from "./frames/FirstFrame";
import SecondFrame from "./frames/SecondFrame";
import ThirdFrame from "./frames/ThirdFrame";
import FourthFrame from "./frames/FourthFrame";
import Footer from "./components/Footer";

import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <FirstFrame />
      <SecondFrame />
      <ThirdFrame />
      <FourthFrame />
      <Footer /> 
    </div>
  );
}
