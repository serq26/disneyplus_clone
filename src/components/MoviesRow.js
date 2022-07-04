import React from "react";
import { moviesRequests } from "../utils";
import Movies from "./Movies";

export default function MoviesRow() {
  return (
    <div className="container">
      {moviesRequests.map((row, index) => {
        if (row.isHome)
          return (
            <Movies
              title={row.title}
              url={`https://api.themoviedb.org/3/${row.url}`}
              key={index}
              type={row.type}
            />
          );
      })}
    </div>
  );
}
