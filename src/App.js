import React from "react";
import {
  // Heading,
  Cards,
  QandA,
  ScrollToTopBtn,
  WhatsAppBtn,
  Pros,
  Sec1,
  ContactForm,
  Prices,
} from "./components";
import { Header, 
  // Services,
   Services2 } from "./container";
import { Route, Routes } from "react-router-dom";
import { WhoWeAre, ServicesPage, ContactUs, ErrorPage } from "./pages";
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
                <Pros />
                {/* <Heading /> */}
                <Services2 />
                <Sec1 />
                <Cards />
                <QandA />
                <Prices />
                <ContactForm />
                {/* <Services /> */}
              </>
            }
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <WhatsAppBtn />
      <ScrollToTopBtn />
    </div>
  );
};

export default App;
