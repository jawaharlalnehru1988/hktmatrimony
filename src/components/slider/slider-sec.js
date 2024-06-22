import './slider-sec.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImageOne from './images/slider_one.png';
import sliderImageTwo from './images/slider_two.png';
import sliderImageThree from './images/slider_three.png';
import sliderImageFour from './images/slider_four.png';
import sliderImageFive from './images/slider_five.png';


import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-section">
      <div className='container' >
        <div className='row'>
         <div className='col-lg-12 col-12 mt-4 mb-4' >
    <div className="slider-container">
      <Slider {...settings}>
        <div className='slider-wrap'>
        <img src={sliderImageOne} alt="marriage" />
        </div>
        <div className='slider-wrap'> 
        <img src={sliderImageTwo} alt="marriage" />
        </div>
        <div className='slider-wrap '>
        <img src={sliderImageThree} alt="marriage" />
        </div>
        <div className='slider-wrap '>
        <img src={sliderImageFour} alt="marriage" />
        </div>
        <div className='slider-wrap'>
        <img src={sliderImageFive} alt="marriage" />
        </div>
        
      </Slider>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  );
}

export default AutoPlay;
