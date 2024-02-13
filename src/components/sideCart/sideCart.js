import React from "react";
import "./sideCart.css";
import { Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decressquantity,
  removeFromCart,
} from "../../rtk/cartSlice";
import toast from "react-hot-toast";

export default function SideCart({ showSideCart, handleSideCart }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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

  return (
    <Offcanvas
      className="SideCart"
      show={showSideCart}
      onHide={handleSideCart}
      placement="end"
    >
      <Offcanvas.Header>
        <Offcanvas.Title className=" fs-1">Cart</Offcanvas.Title>
        <button
          className="SideCart__close-btn my-circle-btn"
          onClick={handleSideCart}
        >
          X
        </button>
      </Offcanvas.Header>
      <Offcanvas.Body className="SideCart__body">
        {cart.length > 0 ? (
          <div className="SideCart__products">
            {cart.map((pro) => {
              return (
                <div key={pro.id} className="SideCart__product">
                  <h4 className="SideCart__product-title">{pro.title}</h4>
                  <div className="SideCart__product-header">
                    <h3 className="SideCart__product-price">{pro.price} $</h3>
                    <h3 className="SideCart__product-tot-price">
                      {pro.price * pro.quantity} $
                    </h3>
                  </div>
                  <div className="SideCart__product-body">
                    <img
                      className="SideCart__product-img"
                      src={pro.images[0]}
                      alt="img"
                    />
                    <div className="SideCart__product-quantity">
                      <div className="SideCart__product-quantity-num">
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
                        className="SideCart__product-quantity-remove my-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="SideCart__message">
            <img
              src={require("../../Images/Add to Cart-cuate.png")}
              alt="img"
            />
            <h4>Cart Is Empty... Add Some Products</h4>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
