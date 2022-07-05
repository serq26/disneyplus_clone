import React from "react";
import { Link } from "react-router-dom";
import { brandCards } from "../utils";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import HomeSkeleton from "./skeletons/HomeSkeleton";

export default function BrandsRow() {
  return (
    <div className="brands-row container">
      <Swiper
        className="moviesSlide"
        direction="horizontal"
        speed={1100}
        spaceBetween={20}
        loop={true}
        autoplay={false}
        delay={1000}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            allowTouchMove: true,
          },
          1300: {
            slidesPerView: 5,
            allowTouchMove: false,
            
          },
        }}
      >
        {brandCards.length > 0 ? (
          brandCards.map((brand, index) => (
            <SwiperSlide key={index}>
              <Link to={`/brand/${brand.brand}`}>
                <div className="brand">
                  <img src={brand.image} alt={brand.brand} />
                  <video
                    className="video"
                    width="320"
                    height="240"
                    loop={true}
                    playsInline={true}
                    muted
                    onMouseOver={(event) => event.target.play()}
                    onMouseOut={(event) => event.target.pause()}
                  >
                    <source src={brand.video} type="video/mp4"></source>
                  </video>
                </div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <HomeSkeleton />
        )}
      </Swiper>
    </div>
  );
}
