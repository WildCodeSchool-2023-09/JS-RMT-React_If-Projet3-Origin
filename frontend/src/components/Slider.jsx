import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Slider.css";

function Slider() {
  return (
    <Carousel>
      <div>slider1</div>
      <div>slider2</div>
      <div>slider3</div>
    </Carousel>
  );
}

export default Slider;
