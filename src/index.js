import React from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Created By Muhammad El Hassan @2022 All rights reserved
// Github Account : https://github.com/MohamedElHassan
// LinkedIn Account : https://www.linkedin.com/in/muhammad-el-hassan-463374214/

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   container
// );
