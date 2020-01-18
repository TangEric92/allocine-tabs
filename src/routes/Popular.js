import React, { useState, useEffect } from "react";
import axios from "axios";
import { Movies } from "../components/";

function Popular() {
  const [movies, setMovies] = useState();

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api-allocine.herokuapp.com/api/movies/popular"
      );
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="Popular">
      {movies && <Movies movies={movies.results} />}
    </div>
  );
}

export default Popular;
