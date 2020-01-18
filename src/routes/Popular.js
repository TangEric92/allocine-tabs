import React from "react";
import { Movies } from "../components/";

function Popular(props) {
  const { movies } = props;

  return (
    <div className="Popular">
      {movies && <Movies movies={movies.results} />}
    </div>
  );
}

export default Popular;
