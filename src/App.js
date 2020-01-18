import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigationbar from "./components/Navigation/NavigationBar";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigationbar />
      </div>
    </Router>
  );
}

export default App;
