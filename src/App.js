import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Header } from "./components";
import { Popular, TopRated, UpComing } from "./routes";
import "./reset.css";
import "./App.css";

function App() {
  const [currentPath, setCurrentPath] = useState("/popular");
  const [movies, setMovies] = useState();

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api-allocine.herokuapp.com/api/movies" + currentPath
      );
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPath]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation currentPath={currentPath} setCurrentPath={setCurrentPath} />
      </div>

      <Switch>
        <Route path="/popular">
          <Popular movies={movies} />
        </Route>
        <Route path="/top_rated">
          <TopRated movies={movies} />
        </Route>
        <Route path="/upcoming">
          <UpComing movies={movies} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
