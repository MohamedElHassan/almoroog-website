import React from "react";
import { Footer } from "../container";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
