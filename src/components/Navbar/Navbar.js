import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
// import { GrClose } from "react-icons/gr";
import images from "../../images";

import "./Navbar.scss";
import { Link } from "react-router-dom";
// "الرئيسية", "تواصل معنا", "الخدمات", "من نحن"
const menu = [
  {
    name: "الرئيسية",
    link: "/",
  },
  {
    name: "الخدمات",
    link: "/services",
  },
  {
    name: "من نحن",
    link: "/who-we-are",
  },
  {
    name: "تواصل معنا",
    link: "/contact-us",
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <Link to="/" className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </Link>
      <div className="app__navbar-list">
        {menu.map((item, index) => (
          <div key={index} className="app__navbar-item">
            <Link to={item.link}>{item.name}</Link>
          </div>
        ))}
        <a
        className="app__navbar-blog"
          href="https://blog.almoroojcargo.com/"
          target="_blank"
          rel="noreferrer"
        >
          المدونة
        </a>
        <a className="app__navbar-btn" href="#">
          تتبع شحنتك
        </a>
      </div>
      {/* Menu for Navigation Bar */}
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
            <div className="app__navbar-menu-btn">
              <HiX onClick={() => setToggleMenu(false)} />
            </div>

            <div className="app__navbar-menu-items">
              {menu.map((item, index) => (
                <div key={index} className="app__navbar-menu-item">
                  <Link onClick={() => setToggleMenu(false)} to={item.link}>
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
