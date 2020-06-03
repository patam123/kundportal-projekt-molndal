import React from "react";

const ButtonComponent = ({ btnText, isClicked,cssValue }) => {
  return <button id={cssValue} onClick={isClicked}>{btnText}</button>;
};

export default ButtonComponent;
