import React from "react";
import { Link } from "react-router-dom";

function navigation({
  path,
  name,
  navstyle,
  icon,
  handleClick,
  keyId,
}) {
  const linkStyle = {
    fontFamily: "Arial",
    textDecoration: "none",
  };

  return (
    <Link
      style={linkStyle}
      onClick={handleClick}
      className={navstyle}
      id={keyId}
      to={path}
    >
      <div id={icon}></div>
      {name}
    </Link>
  );
}

export default navigation;
