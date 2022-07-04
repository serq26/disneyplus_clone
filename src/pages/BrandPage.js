import React from "react";
import { useParams } from "react-router-dom";
import Movies from "../components/Movies";
import { moviesRequests } from "../utils";

export default function BrandPage() {
  const { brand } = useParams();

  return (
    <div className="brand-page">
      <div className="background">
        <img src={`/images/${brand}-bg.jpg`} alt={brand} />
      </div>
      <div className="image">
        <img src={`/images/${brand}.png`} alt={brand} />
      </div>
      <div className="container">
        {moviesRequests.map((row, index) => {
          if (row.type === brand) {
            return (<Movies
              title={row.title}
              url={`https://api.themoviedb.org/3/${row.url}`}
              key={index}
              type={row.type}
            />);
          }
        })}
      </div>
    </div>
  );
}
