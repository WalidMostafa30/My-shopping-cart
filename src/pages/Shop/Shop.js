import React, { useRef, useState } from "react";
import "./Shop.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Shop() {
  const products = useSelector((state) => state.product);

  const [openCategory, setOpenCategory] = useState(false);

  const [productFilter, setProductFilter] = useState(products);

  const [categoryNum, setCategoryNum] = useState(0);

  const openCategoryHandle = () => setOpenCategory(!openCategory);

  const inputRef = useRef(null);

  const ArrayCategory = [
    "All-Category",
    ...new Set(products.map((i) => i.category)),
  ];

  const filterCategory = (cat, index) => {
    if (cat === "All-Category") {
      setProductFilter(products);
    } else {
      const productFilter = products.filter((i) => i.category === cat);
      setProductFilter(productFilter);
    }
    setCategoryNum(index);
    openCategoryHandle();
    inputRef.current.value = "";
  };

  const onChangeSearch = (e) => {
    const productFilter = products.filter((i) =>
      i.title.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setProductFilter(productFilter);
  };

  return (
    <motion.div
      className="Shop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <GlobalTitle title={"Shop"} />
      <div className="Shop__search">
        <input
          onChange={onChangeSearch}
          placeholder="Search..."
          ref={inputRef}
        />
      </div>
      <div className="Shop__container container">
        {productFilter.length > 0 ? (
          productFilter.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        ) : (
          <div className="Shop__message">
            <img
              src={require("../../Images/Add to Cart-cuate.png")}
              alt="img"
            />
            <h1>Cart Is Empty... Add Some Products</h1>
          </div>
        )}
      </div>
      <div className={openCategory ? "Shop__category open" : "Shop__category"}>
        {ArrayCategory.map((cat, index) => {
          return (
            <h5
              key={index}
              className={
                categoryNum === index ? "Shop__cate active" : "Shop__cate"
              }
              onClick={() => filterCategory(cat, index)}
            >
              {cat.toUpperCase()}
            </h5>
          );
        })}
        <button
          className={
            openCategory
              ? "Shop__category-btn open"
              : "Shop__category-btn"
          }
          onClick={openCategoryHandle}
        >
          Category
        </button>
      </div>
    </motion.div>
  );
}
