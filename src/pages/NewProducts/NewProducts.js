import React from "react";
import "./NewProducts.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NewProducts() {
  const products = useSelector((state) => state.product);

  const productFilter = products.filter((i) => i.new === true);

  return (
    <div className="NewProducts">
      <GlobalTitle title={"New Products"} />
      <div className="NewProducts__container container">
        <div className="NewProducts__products">
          {productFilter.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
        <Link className="NewProducts__more my-btn" to={"/shop"}>
          {"Show More >>"}
        </Link>
      </div>
    </div>
  );
}
