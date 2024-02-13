import React from "react";
import "./BestRate.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import { Link } from "react-router-dom";

export default function BestRate() {
  const products = useSelector((state) => state.product);

  const productFilter = products.filter((i) => i.rate > 4);

  return (
    <div className="BestRate">
      <GlobalTitle title={"Best Rate"} />
      <div className="BestRate__container container">
        <div className="BestRate__products">
          {productFilter.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
        <Link className="BestRate__more my-btn" to={"/shop"}>
          {"Show More >>"}
        </Link>
      </div>
    </div>
  );
}
