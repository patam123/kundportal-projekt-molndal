import React from "react";

function HeadTitle({ title }) {
  const divStyle = {
    textAlign: "left",
    lettersSacing: " 0px",
    color: "#656565",
    opacity: 1,
    fontSize:'20px',
    margin:'15px 0px'
  };
  return (
    <div>
      <p style={divStyle}>{title}</p>
    </div>
  );
}

export default HeadTitle;
