import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="Layout">
      <div className="Layout__container container">
        <p className="Layout__welcome">Welcome To</p>
        <h1 className="Layout__title">My Shop</h1>
        <Link className="Layout__btn" to={"/shop"}>
          Shopping Now
        </Link>
      </div>
    </div>
  );
}
