import React from "react";

const ButtonComponent = ({ btnText, isClicked,keyId, cssValue }) => {
  return <button id={keyId} className={cssValue} onClick={isClicked}>{btnText}</button>;
};

export default ButtonComponent;
