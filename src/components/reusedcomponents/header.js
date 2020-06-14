import React from "react";
// import "../App.css";
import "../../App.css";
import ButtonComponent from "./button";
import Links from "../navigationcomponents/links"
import HomeCSS from "../../design/homestyle/home.css";

//verkar funka
const Header = ({headText, handleBtnClick, btnText,id,path}) => {
  return (
    <div id="header-layout">
      <p>{headText}</p>
      <Links
        path={path}
        navstyle="header-button"
        handleClick={handleBtnClick}
        name={btnText}
        keyId={id}        
      />
    </div>
  )
}

export default Header;
