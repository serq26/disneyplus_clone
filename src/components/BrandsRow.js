import React from "react";
import { Link } from "react-router-dom";
import { brandCards } from "../utils";

export default function BrandsRow() {
  return (
    <div className="brands-row container">
      {brandCards.map((brand, index) => (
        <Link key={index} to={`/brand/${brand.brand}`}>
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
      ))}
    </div>
  );
}
