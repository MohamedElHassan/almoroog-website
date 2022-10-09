import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrapper } from "../../wrapper";
import images from "./cardsImages";
import "./Cards.scss";

const cardsData = [
  {
    image: images.card1,
    title: " شحن سريع",
    content:
      " العدي لى الشكل الخارجيرأها. ولذلكياَ - فتجعلها تبدو (أي الأحرف)د",
  },
  {
    image: images.card2,
    title: " شحن سريع",
    content:
      " العدي لى الشكل الخارجيرأها. ولذلكياَ - فتجعلها تبدو (أي الأحرف)د",
  },
  {
    image: images.card3,
    title: " شحن سريع",
    content:
      " العدي لى الشكل الخارجيرأها. ولذلكياَ - فتجعلها تبدو (أي الأحرف)د",
  },
  {
    image: images.card4,
    title: " شحن سريع",
    content:
      " العدي لى الشكل الخارجيرأها. ولذلكياَ - فتجعلها تبدو (أي الأحرف)د",
  },
  {
    image: images.card5,
    title: " شحن سريع",
    content:
      " العدي لى الشكل الخارجيرأها. ولذلكياَ - فتجعلها تبدو (أي الأحرف)د",
  },
];

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
          {cardsData.map((card) => {
            return (
              <motion.div className="item" key={card.title}>
                <div className="item-content">
                  <h2>{card.title}</h2>
                  <p>{card.content}</p>
                </div>
                <img src={card.image} alt={card.title} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrapper(Cards);
