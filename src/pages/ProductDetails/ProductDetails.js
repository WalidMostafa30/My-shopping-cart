import React, { useState } from "react";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/cartSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function ProductDetails({ product, showProductDesc }) {
  const [activeImg, setActiveImg] = useState(0);

  const imgNum = (index) => setActiveImg(index);

  const dispatch = useDispatch();

  const addCartHandle = (product) => {
    dispatch(addToCart(product));
    toast.success("Product Added To Card 😀");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="ProductDetails"
    >
      <div className="ProductDetails__BG" onClick={showProductDesc} />
      <div className="ProductDetails__container container">
        <div
          className="ProductDetails__close-btn my-btn"
          onClick={showProductDesc}
        >
          Back <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="ProductDetails__section">
          <div className="ProductDetails__imgs">
            <img
              className="ProductDetails__big-img"
              src={product.images[activeImg]}
              alt="img"
            />
            <div className="ProductDetails__small-imgs">
              {product.images.map((img, index) => {
                return (
                  <img
                    className={
                      activeImg === index
                        ? "ProductDetails__small-img active"
                        : "ProductDetails__small-img"
                    }
                    key={index}
                    src={img}
                    alt="img"
                    onClick={() => imgNum(index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="ProductDetails__product">
            <h2 className="ProductDetails__product-title">{product.title}</h2>
            <h5 className="ProductDetails__product-description">
              {product.description}
            </h5>
            <p className="ProductDetails__product-price">{product.price} $</p>
            <button
              className="ProductDetails__product-btn my-btn"
              onClick={() => addCartHandle(product)}
            >
              Add To Cart <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
