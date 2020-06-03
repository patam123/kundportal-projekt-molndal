import React from "react";
import "../App.css";
import ButtonComponent from "./button";
import HomeCSS from "../design/home.css";

//verkar funka
class Header extends React.Component {
  render() {
    return (
      <div id="header-layout">
        <p>{this.props.headText}</p>
        <ButtonComponent
          cssValue="header-button"
          isClicked={this.props.handleBtnClick}
          btnText={this.props.btnText}
        />
      </div>
    );
  }
}
export default Header;
