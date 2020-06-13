import React from "react";

function input({ inputtype, inputvalue,inputText, labelname,labelTwo,inputStyle,container }) {
  return (
    
      <div id={container}>
        <label style={{color: "#A1A8C3"}}>{labelname}</label>
        <br></br>
        <input className={inputStyle} type={inputtype} placeholder={inputvalue} value={inputText}></input>
        <label style={{color: "#A1A8C3"}}>{labelTwo}</label>
      </div>
    
  );
}

export default input;
