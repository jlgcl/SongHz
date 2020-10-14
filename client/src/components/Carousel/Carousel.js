import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './carousel.css';

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="artist1">
          <img src={require('../assets/bts.png')} />
        </div>
        <div className="artist2">
          <img src={require('../assets/ag.jpg')} />
        </div>
        <div className="artist3">
          <img src={require('../assets/cp.jpg')} />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
