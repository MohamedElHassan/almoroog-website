import React from "react";
import { Navbar, Heading, Cards, QandA } from "./components";
import { Footer, Header, Services } from "./container";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import CargoPage from "./pages/CargoPage";
import ServicesPage from "./pages/ServicesPage";
import WhoWeArePage from "./pages/WhoWeArePage";
// import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Heading />
      <Cards />
      <QandA />
      <Services />
      <Footer />

      {/* <Routes>
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
          <Route path="/cargo" element={<CargoPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
        </Route>
        <Route
          path="*"
          element={
            <h1 style={{ height: "80vh" }}>Error 404, Page Not Found</h1>
          }
        />
      </Routes> */}

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
