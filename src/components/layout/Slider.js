



import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from '../../assets/images/banner-slide-1.jpg';
import slider2 from '../../assets/images/banner-slide-2.jpg';
import slider3 from '../../assets/images/banner-slide-3.jpg';
export default class Slide extends Component {
  render() {
    var settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <div>
        <Slider {...settings}>
          <div>
             
            <img  src={slider1} />
          </div>
          <div>
            <img src={slider2} />
          </div>
          <div>
            <img src={slider3} />
          </div>
        
        </Slider>
      </div>
    );
  }
}