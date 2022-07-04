import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster, watching }) {
  let timeLeft = Math.floor(Math.random() * 99) + 1;
  let barWidth = 100 - timeLeft;
  return (
    <Link to={`/play/${id}`}>
      <div className={`movie-card ${watching ? "watching" : ""}`}>
        {watching ? (
          <>
            <div className="progressBar">
              <div
                style={{ width: barWidth + "%" }}
                className="colorBar"
              ></div>
            </div>
            <div className="watchingData">
              <h3>{title}</h3>
              <div className="lowerPart">
                <div className="buttons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="timeLeft">{timeLeft} min left</span>
              </div>
            </div>
          </>
        ) : null}
        {poster == null ? <span className="title">{title}</span> : null}
        <img
          src={
            poster !== null
              ? `https://image.tmdb.org/t/p/w500/${poster}`
              : "/images/noImage.png"
          }
          alt={title}
        />
      </div>
    </Link>
  );
}
