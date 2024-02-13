import React from "react";
import "./css/App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import ContactUs from "./pages/ContactUs/ContactUs";
import { Toaster } from "react-hot-toast";
import SettingSide from "./components/SettingSide/SettingSide";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <SettingSide />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
