import React from "react";
import { NavLink } from "react-router-dom";

function navigation({ path, name, isActive, inActive, icon, keyId, isExact }) {
  const linkStyle = {
    fontFamily: "Arial",
    textDecoration: "none",
  };

  return (
    <NavLink
      style={linkStyle}
      activeClassName={isActive}
      className={inActive}
      id={keyId}
      to={path}
      exact={isExact}
    >
      <div id={icon}></div>
      {name}
    </NavLink>
  );
}

export default navigation;
