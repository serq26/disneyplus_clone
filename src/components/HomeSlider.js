import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';
import { slideImages } from "../utils";

export default function HomeSlider() {
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={1.13}
      speed={1100}
      loop={true}
      autoplay={false}
      delay={1000}
      spaceBetween={20}
      centeredSlides={true}
      centerInsufficientSlides={true}
      centeredSlidesBounds={true}
      slideToClickedSlide={true}
      slidesOffsetBefore={0}
      modules={[ Pagination, Autoplay]}
      pagination={{clickable: true}}
      style={{marginTop:"110px"}}
    >
      {slideImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="slide">
            <img className="slide_img" src={image.url} alt="Home Slide" />
            <img className="slide_text" src={image.textImage} alt="Home Slide Text" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
