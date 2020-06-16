import React from "react";
// import "../App.css";
import "../../App.css";
import ButtonComponent from "./button";
import Links from "../navigationcomponents/links";
import HomeCSS from "../../design/homestyle/home.css";

//verkar funka
const Header = ({ headText, linkText, id, path }) => {
  return (
    <div id="header-layout">
      <p>{headText}</p>
      <Links path={path} inActive="header-button" name={linkText} keyId={id} />
    </div>
  );
};

export default Header;
