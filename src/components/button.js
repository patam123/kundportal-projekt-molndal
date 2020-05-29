import React from "react";

const ButtonComponent = ({ btnText, isClicked }) => {
  return <button onClick={isClicked}>{btnText}</button>;
};

export default ButtonComponent;
