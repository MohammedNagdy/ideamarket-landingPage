import React from "react";
import "./style.css";
import FirstFrame from "./components/FirstFrame";
import SecondFrame from "./components/SecondFrame";
import ThirdFrame from "./components/ThirdFrame";


import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <FirstFrame />
      <SecondFrame />
      <ThirdFrame />
    </div>
  );
}
