import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs";

import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./Footer.scss";

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
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 110,
      behavior: "smooth",
    });
  };
  return (
    <div className="app__footer">
      <div className="app__footer-contact">
        <h2>معلومات التواصل</h2>
        <div className="app__footer-contact-icons">
          <a href="https://www.facebook.com/">
            <BsFacebook />
          </a>
          <a href="https://www.twitter.com/">
            <BsTwitter />
          </a>
          <a href="https://www.instagram.com/">
            <BsInstagram />
          </a>
          <a href="https://www.linkedin.com/">
            <BsLinkedin />
          </a>
        </div>
        <div className="app__footer-contact-phone">
          <BsFillTelephoneFill />
          <a href="tel:+971582881365">+971582881365</a>
        </div>
        <div className="app__footer-contact-mail">
          <HiMail />
          <a href="mailto:info@almoroojcargo.com">info@almoroojcargo.com</a>
        </div>
      </div>
      <div className="app__footer-sitemap">
        <h2>روابط قد تهمك</h2>
        {menu.map((item, index) => (
          <div key={index} className="app__footer-item">
            <Link onClick={scrollToTop} to={item.link}>
              {item.name}
            </Link>
          </div>
        ))}
        <a className="app__navbar-blog" href="https://almoroojcargo.com/blog">
          المدونة
        </a>
      </div>
      <div className="app__footer-about">
        <h2>عن الشركة</h2>
        <p>
          شركة المروج هي شركة ولدت من رحم أحتياج السوق إلى كيان متكامل يقدم خدمة
          شحن عالية الجودة ويضمن وصول الشحنات سليمة من أي عيوب وفي المواعيد
          المحددة، وذلك لعمنا الراسخ بأهمية هذه الشحنات من جميع الجوانب.
        </p>
      </div>
    </div>
  );
};

export default Footer;
