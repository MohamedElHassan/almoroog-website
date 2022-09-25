import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrapper } from "../../wrapper";
import images from "./cardsImages";
import "./Cards.scss";

const Cards = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="app__cards">
      <div className="section__heading">
        <h2>المميزات</h2>
      </div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: width }}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <div className="item-content">
                  <h2>شحن سريع</h2>
                  <p>
                    لى الشكل الخارجيرأها. ولذلكياَ - فتجعلها تبدو (أي الأحرف)
                    وكأنها نص مقروء. العديد
                  </p>
                </div>
                <img src={image} alt={image} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrapper(Cards);
