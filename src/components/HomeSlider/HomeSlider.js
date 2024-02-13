import React from "react";
import "./HomeSlider.css";
import { Carousel } from "react-bootstrap";

export default function HomeSlider() {
  return (
    <Carousel className="Slider">
      <Carousel.Item interval={3000}>
        <img
          style={{ width: "100%", objectFit: "cover" }}
          src={require("../../Images/imgSlide1.jpg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          style={{ width: "100%", objectFit: "cover" }}
          src={require("../../Images/imgSlide2.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          style={{ width: "100%", objectFit: "cover" }}
          src={require("../../Images/imgSlide3.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
