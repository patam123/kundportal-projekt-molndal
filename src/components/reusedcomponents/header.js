import React from "react";
// import "../App.css";
import "../../App.css";
import ButtonComponent from "./button";
import HomeCSS from "../../design/homestyle/home.css";

//verkar funka
const Header = ({headText, handleBtnClick, btnText}) => {
  return (
    <div id="header-layout">
      <p>{headText}</p>
      <ButtonComponent
        cssValue="header-button"
        isClicked={handleBtnClick}
        btnText={btnText}
      />
    </div>
  )
}

export default Header;
