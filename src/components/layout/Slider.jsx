



import React, { Component } from "react";
import slider1 from '../../assets/images/banner-slide-1.jpg';
import slider2 from '../../assets/images/banner-slide-2.jpg';
import slider3 from '../../assets/images/banner-slide-3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import { Autoplay, Pagination, Navigation ,EffectCreative } from "swiper";
export default class Slide extends Component {
  render() {

    return (
      <div>
        <Swiper
          spaceBetween={30}
          effect={"creative"}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={
            true
          }
         
          modules={[Autoplay, Pagination, Navigation ,EffectCreative]}
          className="mySwiper"
        >
         <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={slider1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={slider2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={slider3} />
          </div>
        </SwiperSlide>
          
        </Swiper>

      </div >
    );
  }
}