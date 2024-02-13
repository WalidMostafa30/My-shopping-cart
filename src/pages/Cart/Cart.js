import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decressquantity,
  removeFromCart,
} from "../../rtk/cartSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";


export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const incQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const decQuantity = (product) => {
    dispatch(decressquantity(product));
  };

  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
    toast.error("Product Deleted From Card 😥");
  };

  const clearAllCart = () => {
    dispatch(clearCart());
    toast.success("Thanks For Shopping 🥰");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="Cart"
    >
      <GlobalTitle title={"Cart"} />
      {cart.length > 0 ? (
        <div className="Cart__container container">
          <div className="Cart__details">
            <h2 className="Cart__totalPrice">Total Price: {totalPrice} $</h2>
            <button className="Cart__btn-clear my-btn" onClick={clearAllCart}>
              Check Out
            </button>
          </div>
          <div className="Cart__products">
            {cart.map((pro) => {
              return (
                <div key={pro.id} className="Cart__product">
                  <div className="Cart__product-details">
                    <h4 className="Cart__product-title">{pro.title}</h4>
                    <div className="Cart__product-prices">
                      <h3 className="Cart__product-price">{pro.price} $</h3>
                      <h3 className="Cart__product-tot-price">
                        {pro.price * pro.quantity} $
                      </h3>
                    </div>
                  </div>
                  <div className="Cart__product-body">
                    <div className="Cart__product-quantity">
                      <div className="Cart__product-quantity-num">
                        <button
                          className="my-circle-btn"
                          onClick={() => decQuantity(pro)}
                        >
                          -
                        </button>
                        <p>{pro.quantity}</p>
                        <button
                          className="my-circle-btn"
                          onClick={() => incQuantity(pro)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeProduct(pro)}
                        className="Cart__product-quantity-remove my-btn"
                      >
                        Remove
                      </button>
                    </div>
                    <img
                      className="Cart__product-img"
                      src={pro.images[0]}
                      alt="img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="Cart__message">
          <img src={require("../../Images/Add to Cart-cuate.png")} alt="img" />
          <h1>Cart Is Empty... Add Some Products</h1>
        </div>
      )}
    </motion.div>
  );
}
