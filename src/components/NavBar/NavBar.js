import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import SideCart from "../sideCart/sideCart";
import { motion } from "framer-motion";

export default function NavBar() {
  const [showSideCart, setShowSideCart] = useState(false);

  const [showNav, setShowNav] = useState(false);

  const handleSideCart = () => setShowSideCart(!showSideCart);

  const handleNav = () => setShowNav(!showNav);

  const cart = useSelector((state) => state.cart);

  return (
    <>
      <motion.div
        className="NavBar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="NavBar__container container">
          <NavLink className="NavBar__logo" to="/">
            My Shop
          </NavLink>

          <div
            className={showNav ? "NavBar__links open" : "NavBar__links"}
            onClick={handleNav}
          >
            <NavLink
              className={(navData) =>
                navData.isActive ? "NavBar__link active" : "NavBar__link"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "NavBar__link active" : "NavBar__link"
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "NavBar__link active" : "NavBar__link"
              }
              to="/cart"
            >
              Cart
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "NavBar__link active" : "NavBar__link"
              }
              to="/contactUs"
            >
              Contact Us
            </NavLink>
          </div>

          <div className="NavBar__icons">
            <div className="NavBar__icon " onClick={handleSideCart}>
              <FontAwesomeIcon icon={faCartShopping} />
              {cart.length > 0 && (
                <span className="NavBar__icon-quantity my-circle-btn">
                  {cart.length > 9 ? "+9" : cart.length}
                </span>
              )}
            </div>
            <div
              onClick={handleNav}
              className={showNav ? "NavBar__brg-icon open" : "NavBar__brg-icon"}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </motion.div>
      <SideCart showSideCart={showSideCart} handleSideCart={handleSideCart} />
    </>
  );
}
