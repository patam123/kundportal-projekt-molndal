import React from "react";
import "../App.css";
import ButtonComponent from "./button";

//verkar funka
class Header extends React.Component {

  render() {
    return (
      <div className="header-layout">
        <h3>{this.props.headText}</h3>
        <ButtonComponent
            className="header-button"
          isClicked={this.props.handleBtnClick}
          btnText={this.props.btnText}
        />
      </div>
    );
  }
}
export default Header;
