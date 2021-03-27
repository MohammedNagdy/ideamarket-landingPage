import React from "react";
import "../style.css";
import rect12 from "../assets/Rectangle 12.png";
import quant from "../assets/qs 1.png";
import Chart from "../components/Chart";
import Tabs from "../components/Tabs";
import fb from "../assets/Facebook.png";
import tw from "../assets/twitter.png";

export default function ThirdFrame() {
  const tweeterData = [30, 20, 15, 13, 11, 10];
  const facebookData = [40, 20, 5, 3, 1, 12];
  const labelData = ["elon", "mark", "mike", "hex", "john", "lily"];

  const twitterIcon = <img src={tw} alt="twitter" />
  const fbIcon = <img src={fb} alt="facebook" />

  return (
    <div className="third-frame">
      <div className="signals">
        <div className="row">
          <h2 className="white-title">$ 930,000</h2>
          <h2 className="white-title"> in trust signals</h2>
        </div>
        <div className="audited row">
        <h5 className="audited-title audited">Audited by</h5>
        <img className="quant-audited " src={quant} alt="quantsamp-logo"/>
      </div>
      </div>

      <div className="popularity-chart">
        <h3 className="chart-title">Popularity</h3>
      <Tabs>
        <div label={twitterIcon}>
          <Chart data={tweeterData} labelData={labelData} />
        </div>
        <div label={fbIcon}>
          <Chart data={facebookData} labelData={labelData} />
        </div>
      </Tabs>
      </div>
    </div>
  );
}
