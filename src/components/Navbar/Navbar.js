import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
// import { GrClose } from "react-icons/gr";

import images from "../../images";
import "./Navbar.scss";
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

const Navbar = (props) => {
  // فكرة الناف بار الجديد : هنشوف ال URL فوق بيأشر لفين ومنها نغير اللون المحدد
  const location = useLocation();
  const { pathname } = location;

  const [activePage, setActivePage] = useState(pathname);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    // runs on location, i.e. route, change
    console.log("handle route change here", pathname);
    setActivePage(pathname);
  }, [pathname]);

  // const handleClick = (index) => {
  //   setActivePage(index);
  // };
  return (
    <div className="app__navbar">
      <Link to="/" className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </Link>
      <div className="app__navbar-list">
        {menu.map((item, index) => (
          <div key={index} className="app__navbar-item">
            <Link
              className={activePage === item.link ? "active" : ""}
              // className={urlCheck === item.link ? "active" : ""}
              // onClick={() => handleClick(index)}
              to={item.link}
            >
              {item.name}
            </Link>
          </div>
        ))}
        <a className="app__navbar-blog" href="https://almoroojcargo.com/blog">
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
                  <Link
                    className={activePage === item.link ? "active" : ""}
                    onClick={() => {
                      // handleClick(index);
                      setToggleMenu(false);
                    }}
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <a
                className="app__navbar-blog"
                href="https://almoroojcargo.com/blog"
              >
                المدونة
              </a>
              <a className="app__navbar-btn" href="#">
                تتبع شحنتك
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
