import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { apiKey } from "../utils";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([""]);
  useEffect(() => {
    if (search !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
        )
        .then((response) => {
          const { data } = response;
          setSearchResults(data.results);
          console.log(data.results);
        });
    }
  }, [search]);

  return (
    <div className="searchPage container">
      <div>
        <SearchBar setSearch={setSearch}/>
        <div className="gallery">
          <div className="s_container">
            {search
              ? searchResults.map((result) => (
                  <MovieCard
                    id={result.id}
                    key={result.id}
                    poster={result.backdrop_path}
                    title={result.title}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
