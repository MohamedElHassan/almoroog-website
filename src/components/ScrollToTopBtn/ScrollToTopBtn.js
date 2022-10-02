import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <motion.button
        onClick={scrollToTop}
        type="button"
        className={isVisible ? "scroll-top-btn active" : "scroll-top-btn"}
      >
        <FaChevronUp />
      </motion.button>
    </>
  );
};

export default ScrollToTopBtn;
