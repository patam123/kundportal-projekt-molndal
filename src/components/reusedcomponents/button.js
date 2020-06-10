import React from "react";

const ButtonComponent = ({ btnText, isClicked,cssValue, className }) => {
  return <button id={cssValue} className={className} onClick={isClicked}>{btnText}</button>;
};

export default ButtonComponent;
