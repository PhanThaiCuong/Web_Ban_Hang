import React from "react";
import Slider from "react-slick";

const SliderComponent = ({ arrImages }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Slider {...settings}>
     {arrImages.map((image, index) => {
  return (
    <img key={index} src={image} alt="slider" preview={image ? "false" : undefined} width={100} />
  );
})}
    </Slider>
  );
};

export default SliderComponent;
