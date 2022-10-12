import React from "react";
import images from "../../images";

import { AppWrapper } from "../../wrapper";
import "./Services2.scss";

const Services2 = () => {
  return (
    <>
      <div className="section__heading">
        <h2>خدماتنا</h2>
      </div>

      <div className="app__services2">
        <div className="left">
          <div className="left-img">
            <img src={images.services1} alt="left-img" />
          </div>
          <div className="left-text">
            <h3>الشحن الجوي</h3>
          </div>
          <div className="left-img">
            <img src={images.services3} alt="left-img" />
          </div>
          <div className="left-text">
            <h3>الشحن البري</h3>
          </div>
        </div>
        <div className="middle">
          <div className="middle-line first"></div>
          <div className="middle-line second"></div>
          <div className="middle-line third"></div>
          <div className="middle-line last"></div>
        </div>
        <div className="right">
          <div className="right-text">
            <h3>الفك والتغليف</h3>
          </div>
          <div className="right-img">
            <img src={images.services2} alt="left-img" />
          </div>
          <div className="right-text">
            <h3>الشحن البحري</h3>
          </div>
          <div className="right-img">
            <img src={images.services4} alt="left-img" />
          </div>
        </div>
      </div>

      <div className="app__services2-m">
        <div className="left">
          <div className="left-img">
            <img src={images.services2} alt="left-img" />
          </div>
          <div className="left-text">
            <h3>الشحن الجوي</h3>
          </div>
          <div className="left-img">
            <img src={images.services4} alt="left-img" />
          </div>
          <div className="left-text">
            <h3>الشحن البري</h3>
          </div>
        </div>
        <div className="middle">
          <div className="middle-line first"></div>
          <div className="middle-line second"></div>
          <div className="middle-line third"></div>
          <div className="middle-line last"></div>
        </div>
        <div className="right">
          <div className="right-text">
            <h3>الفك والتغليف</h3>
          </div>
          <div className="right-img">
            <img src={images.services1} alt="left-img" />
          </div>
          <div className="right-text">
            <h3>الشحن البحري</h3>
          </div>
          <div className="right-img">
            <img src={images.services3} alt="left-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrapper(Services2);
