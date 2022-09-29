import React from "react";
import { Heading, Cards, QandA } from "./components";
import { Header, Services } from "./container";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { WhoWeAre, ServicesPage, ContactUs } from "./pages";
import Layout from "./pages/Layout";

import "./App.scss";
// Created By Muhammad El Hassan @2022 All rights reserved
// Github Account : https://github.com/MohamedElHassan
// LinkedIn Account : https://www.linkedin.com/in/muhammad-el-hassan-463374214/

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Header />
                <Heading />
                <Cards />
                <QandA />
                <Services />
              </>
            }
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
        </Route>
        <Route
          path="*"
          element={
            <h1 style={{ height: "80vh" }}>Error 404, Page Not Found</h1>
          }
        />
      </Routes>

      <motion.a
        className="whatsapp-btn"
        href="https://api.whatsapp.com/send?phone=+971582881365"
      >
        <BsWhatsapp />
      </motion.a>
    </div>
  );
};

export default App;
