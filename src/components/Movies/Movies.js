import React from "react";
import Movie from "./Movie";
import "./movies.css";

const Movies = props => {
  const { movies } = props;

  return (
    <div className="movies">
      {movies &&
        movies.map((movie, index) => {
          return <Movie key={index} movie={movie} />;
        })}
    </div>
  );
};

export default Movies;
