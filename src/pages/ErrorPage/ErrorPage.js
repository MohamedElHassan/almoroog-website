import React from "react";
import { Link } from "react-router-dom";

import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="app__error">
      <h1>خطأ 404</h1>
      <Link to="/">إذهب للرئيسية</Link>
    </div>
  );
};

export default ErrorPage;
