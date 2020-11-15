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
          <a href="/artists/bts">
            <img src={require('../assets/bts.png')} />
          </a>
        </div>
        <div className="artist2">
          <a href="artists/ariana_grande">
            <img src={require('../assets/ag.jpg')} />
          </a>
        </div>
        <div className="artist3">
          <a href="artists/coldplay">
            <img src={require('../assets/cp.jpg')} />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
