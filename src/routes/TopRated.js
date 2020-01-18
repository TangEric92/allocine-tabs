import React from "react";
import { Movies } from "../components/";

function TopRated(props) {
  const { movies } = props;

  return (
    <div className="top-rated">
      {movies && <Movies movies={movies.results} />}
    </div>
  );
}

export default TopRated;
