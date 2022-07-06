import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import HomeSkeleton from "../components/skeletons/HomeSkeleton";
import MovieCard from "../components/MovieCard";

export default function Movie() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([""]);
  const [recommended, setRecommended] = useState([""]);
  const [videos, setVideos] = useState([""]);
  const [cast, setCast] = useState([""]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`
      )
      .then((response) => {
        const { data } = response;
        setMovie(data);
        setVideos(data.videos.results.slice(0,3));
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) => {
        const { data } = response;
        setRecommended(data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        const { data } = response;
        setCast(data.cast);
      });
  }, [movieId]);

  return (
    <div className="moviePage">
      <div className="background">
        <div className="overlay"></div>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${movie["backdrop_path"]}`}
          alt={movie}
        />
      </div>
      <div className="info">
        <h1 className="title">{movie["title"]}</h1>
        <div className="buttons">
          <button className="watch">
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z"></path>
            </svg>
            Watch Now
          </button>
          <button className="trailer">
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z"></path>
            </svg>
            Trailer
          </button>
          <button className="plus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="users">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </button>
        </div>
        <div className="movie-info">
          <span className="detailPage__years">{movie["release_date"]}</span>
          <span className="detailPage__duration">
            {movie["runtime"] + " minutes"}
          </span>
          {Array.isArray(movie.genres) === true
            ? movie.genres.map((genre, index) => (
                <span key={index} className="detailPage__genres">
                  {genre.name}
                </span>
              ))
            : null}
        </div>
        <div className="description">
          <p>{movie["overview"]}</p>
        </div>

        <div class="tabs">
          <input type="radio" id="tab1" name="tab-control" checked />
          <input type="radio" id="tab2" name="tab-control" />
          <input type="radio" id="tab3" name="tab-control" />
          <input type="radio" id="tab4" name="tab-control" />
          <ul>
            <li title="Features">
              <label for="tab1" role="button">
                <span>Suggestions</span>
              </label>
            </li>
            <li title="Delivery Contents">
              <label for="tab2" role="button">
                <span>Extras</span>
              </label>
            </li>
            <li title="Shipping">
              <label for="tab3" role="button">
                <span>Details</span>
              </label>
            </li>
          </ul>
          <div class="slider">
            <div class="indicator"></div>
          </div>
          <div class="content">
            <section>
              <div className="movies-row">
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
                        centeredSlides: false,
                        slidesPerView: 3,
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
                    {recommended.length > 0 ? (
                      recommended.map((movie, index) => (
                        <SwiperSlide key={index}>
                          <MovieCard
                            key={movie.id}
                            id={movie.id}
                            poster={movie.backdrop_path}
                            title={movie.title}
                            watching={false}
                          />
                        </SwiperSlide>
                      ))
                    ) : (
                      <HomeSkeleton />
                    )}
                  </Swiper>
                </div>
              </div>
            </section>
            <section id="extras">
              <div className="movies-row">
                <div className="slide-wrapper">
                  <Swiper
                    className="moviesSlide"
                    direction="horizontal"
                    speed={1100}
                    spaceBetween={20}
                    loop={false}
                    autoplay={false}
                    delay={1000}
                    modules={[Navigation, Autoplay]}
                    navigation={{ clickable: true }}
                    breakpoints={{
                      320: {
                        centeredSlides: true,
                        slidesPerView: 4,
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
                    {videos.length > 0 ? (
                      videos.map((video, index) => (
                        <SwiperSlide key={index}>
                          <iframe
                            title={index}
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </SwiperSlide>
                      ))
                    ) : (
                      <HomeSkeleton />
                    )}
                  </Swiper>
                </div>
              </div>
            </section>
            <section>
              <div className="tab__container">
                <div className="tab__mainColumn">
                  <h2 className="tab__title">{movie["title"]}</h2>
                  <p className="tab__description">{movie["overview"]}</p>
                </div>
                <div className="tab__itemsColumn">
                  <div className="tab_itemSubColumn">
                    <div className="tab__item">
                      <h3 className="tab__subtitle">Duration:</h3>
                      <p>{movie["runtime"]} minutes</p>
                    </div>
                    <div className="tab__item">
                      <h3 className="tab__subtitle">Release Date:</h3>
                      <p>{movie["release_date"]}</p>
                    </div>
                  </div>
                  <div className="tab__itemSubColumn">
                    <div className="tab__item">
                      <h3 className="tab__subtitle">Genres:</h3>
                      {Array.isArray(movie.genres) === true
                        ? movie.genres.map((genre) => <p>{genre.name}</p>)
                        : null}
                    </div>
                    <div className="tab__item">
                      <h3 className="tab__subtitle">Cast:</h3>
                      {cast.slice(0, 4).map((actor) => (
                        <p>{actor.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
