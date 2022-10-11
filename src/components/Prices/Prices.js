import React from "react";

import { AppWrapper } from "../../wrapper";
import "./Prices.scss";

const Prices = () => {
  return (
    <div className="app__prices">
      <div className="section__heading">
        <h2>أسعار الشحن</h2>
      </div>
      <div className="app__prices-items">
        <div className="item">
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper(Prices);
