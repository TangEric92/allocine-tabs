import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import "./navigation.css";

const NavigationBar = () => {
  const [currentPath, setCurrentPath] = useState("/popular");

  return (
    <nav className="navigation">
      <NavigationButton
        to="/popular"
        name="Popular Movies"
        setCurrentPath={setCurrentPath}
        currentPath={currentPath}
      />
      <NavigationButton
        to="/upcoming"
        name="Upcoming Movies"
        setCurrentPath={setCurrentPath}
        currentPath={currentPath}
      />
      <NavigationButton
        to="/top-rated"
        name="Top Rated Movies"
        setCurrentPath={setCurrentPath}
        currentPath={currentPath}
      />
    </nav>
  );
};

export default NavigationBar;
