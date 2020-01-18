import React from "react";

const Movie = props => {
  const { movie } = props;
  return (
    <div className="movie">
      <img
        src={
          "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.poster_path
        }
      />
      <div className="details">
        <span className="title">{movie.title}</span>
        <span className="release-date">{movie.release_date}</span>
        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
