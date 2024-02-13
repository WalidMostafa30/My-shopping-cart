import React, { useState } from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/cartSlice";
import toast from "react-hot-toast";

export default function Product({ product }) {
  const [productDesc, setproDuctDesc] = useState(false);
  const showProductDesc = () => setproDuctDesc(!productDesc);
  const dispatch = useDispatch();
  const addCartHandle = () => {
    dispatch(addToCart(product));
    toast.success("Product Added To Card 😀");
  };

  return (
    <>
      <div className="Product">
        <div className="Product__img">
          <img src={product.images[0]} alt="img" />
          <div className="Product__img-back">
            <FontAwesomeIcon
              className="Product__img-back-icon"
              icon={faEye}
              onClick={showProductDesc}
            />
            <FontAwesomeIcon
              className="Product__img-back-icon"
              icon={faCartShopping}
              onClick={addCartHandle}
            />
          </div>
        </div>
        <h4 className="Product__title" onClick={showProductDesc}>
          {product.title}
        </h4>
        <p className="Product__price">{product.price} $</p>
      </div>
      {productDesc && (
        <ProductDetails product={product} showProductDesc={showProductDesc} />
      )}
    </>
  );
}
