import React from 'react';
import './MtmHome.css';
import myImage from './images/logo.png';
import Signin from "../../login-pages/login";
import SignUp from "../../login-pages/signup"


// slider section  Start
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImageOne from './images/slider-image/slider_one.png';
import sliderImageTwo from './images/slider-image/slider_two.png';
import sliderImageThree from './images/slider-image/slider_three.png';
import sliderImageFour from './images/slider-image/slider_four.png';
import sliderImageFive from './images/slider-image/slider_five.png';

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







// slider section  End

function Home() {
  return (
    <div className="banner_section">
    <div className='container' >
      <div className='row'>
      
    <div className='col-lg-12 col-12 mt-3  banner_wrapper' >
   <h2>Discover True Love on <span>HARE KRISHNA TAMIL</span> MATRIMONY <br /> Your Journey to Happily Ever After Begins Here </h2>
    <p>Now find matches based on your Exclusively Vegetarian, hobbies & interests</p>
   </div>
  
      </div>
    
    </div>
    </div>
    
      )
  }




function MtmNavBar() {
    return (

    <>
      <div className="header-class">
    
      <div className='container'>
        <div className='row pt-3 pb-3'>

      <div className='col-lg-2'>
        <div className="logo">
          <a href="javascriptvoid(0);">
             <img src={myImage} alt="marriage" />
           </a>
        </div>
      </div>
      <div className='col-lg-10 mt-2'>
        <div className="nav-wrap">

      <ul className="navbar-links" >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li ><Signin /></li>
        <li><SignUp /></li>
      </ul>
      </div>
      </div>
      </div>
        </div>
       
      </div>
       <Home/>
       <AutoPlay />
       </>
        )
    }


    export default MtmNavBar;