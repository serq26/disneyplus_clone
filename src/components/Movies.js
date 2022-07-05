import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import HomeSkeleton from "./skeletons/HomeSkeleton";

export default function Movies({ title, url, type }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await axios.get(url).then((result) => setMovies(result.data.items));
    };

    fetchMovies();
  }, [url]);

  return (
    <div className="movies-row">
      <h2>{title}</h2>
      <div className="slide-wrapper">
        <Swiper
          className="moviesSlide"
          direction="horizontal"
          speed={1100}
          spaceBetween={20}
          loop={true}
          autoplay={false}
          delay={1000}
          modules={[Navigation, Autoplay]}
          navigation={{ clickable: true }}
          breakpoints={{
            320: {
              centeredSlides:false,
              slidesPerView: 3            
            },
            1300: {
              slidesPerView: 5.5,
              centeredSlides: true,
              centerInsufficientSlides: true,
              centeredSlidesBounds: true,
              slideToClickedSlide: true,
              slidesOffsetBefore: 0,
            },
          }}
        >
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <SwiperSlide>
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster={movie.backdrop_path}
                  title={movie.title}
                  watching={type === "watching" ? true : false}
                />
              </SwiperSlide>
            ))
          ) : (
            <HomeSkeleton />
          )}
        </Swiper>
      </div>
    </div>
  );
}
