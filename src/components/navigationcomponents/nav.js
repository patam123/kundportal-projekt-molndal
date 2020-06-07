import React from "react";
import { Link } from "react-router-dom";


function navigation({ path, name, navstyle, icon, handleMouseOver,handleMouseLeave,handleClick, keyId }) {
  const linkStyle = {
    fontSize: "1.3vw",
    fontFamily: "Arial",
    textDecoration:"none"
    
  };
  
  return (    
        <div >   
        <Link style={linkStyle} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handleClick} className={navstyle} id={keyId} to={path}>
          <div id={icon}></div>
          {name}
        </Link>       
        </div>      
  );
}

export default navigation;
