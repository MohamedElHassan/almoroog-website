import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
// import { GrClose } from "react-icons/gr";
import images from "../../images";

import "./Navbar.scss";
import { Link } from "react-router-dom";
// "الرئيسية", "الشحن", "الخدمات", "من نحن"
const menu = [
  {
    name: "الرئيسية",
    link: "/",
  },
  {
    name: "الشحن",
    link: "/cargo",
  },
  {
    name: "الخدمات",
    link: "/services",
  },
  {
    name: "من نحن",
    link: "/who-we-are",
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="app__navbar-list">
        {menu.map((item, index) => (
          <div key={index} className="app__navbar-item">
            <Link to={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className="app__navbar-menu">
        {toggleMenu ? (
          ""
        ) : (
          <GiHamburgerMenu onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <motion.div
            className="app__navbar-menu-container"
            whileInView={{ x: [-300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* <GrClose onClick={() => setToggleMenu(false)} /> */}
            {menu.map((item, index) => (
              <div key={index} className="app__navbar-menu-item">
                <Link
                  onClick={() => setToggleMenu(false)}
                  to={item.link}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
