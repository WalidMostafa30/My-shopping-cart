import React from "react";
import "./Home.css";
import Layout from "../Layout/Layout";
import NewProducts from "../NewProducts/NewProducts";
import BestRate from "../BestRate/BestRate";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import { motion } from "framer-motion";
import Services from "../Services/Service";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Layout />
      <NewProducts />
      <HomeSlider />
      <BestRate />
      <Services />
    </motion.div>
  );
}
