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
    name: "تواصل معنا",
    link: "/contact-us",
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
const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-contact">
        <h2>معلومات التواصل</h2>
        <div className="app__footer-contact-icons">
          <a href="https://www.facebook.com/">
            <BsFacebook />
          </a>
          <a href="https://www.facebook.com/">
            <BsTwitter />
          </a>
          <a href="https://www.facebook.com/">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com/">
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
            <Link to={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className="app__footer-about">
        <h2>عن الشركة</h2>
        <p>
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ -إلى حد ما
        </p>
      </div>
    </div>
  );
};

export default Footer;
