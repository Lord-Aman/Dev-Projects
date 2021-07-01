import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "sections/banner1";
import Banner2 from "sections/banner2";
import Banner3 from "sections/banner3";

const Corousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Banner1 />
      </Carousel.Item>
      <Carousel.Item>
        <Banner2 />
      </Carousel.Item>
      <Carousel.Item>
        <Banner3 />
      </Carousel.Item>
    </Carousel>
  );
};

export default Corousel;
