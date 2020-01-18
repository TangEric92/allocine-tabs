import React from "react";
import { Link } from "react-router-dom";

const NavigationButton = props => {
  const { name, to, currentPath, setCurrentPath } = props;
  const isCurrentPath = currentPath === to;

  return (
    <Link
      to={to}
      onClick={() => setCurrentPath(to)}
      style={{ textDecoration: isCurrentPath ? "underline" : "none" }}
    >
      {name}
    </Link>
  );
};

export default NavigationButton;
