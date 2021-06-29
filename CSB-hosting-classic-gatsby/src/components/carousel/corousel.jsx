import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner from "sections/banner";

const Corousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Banner />
      </Carousel.Item>
      <Carousel.Item>
        <Banner />
      </Carousel.Item>
      <Carousel.Item>
        <Banner />
      </Carousel.Item>
    </Carousel>
  );
};

export default Corousel;
