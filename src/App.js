import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Header } from "./components";
import { Popular, TopRated, UpComing } from "./routes";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
      </div>

      <Switch>
        <Route path="/popular">
          <Popular />
        </Route>
        <Route path="/top-rated">
          <TopRated />
        </Route>
        <Route path="/upcoming">
          <UpComing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
