import React from "react";

function input({ inputtype, inputvalue,inputText, labelname,labelTwo,inputStyle,container,labelStyle, onChange }) {
  return (
    
      <div id={container}>
        <label className={labelStyle}>{labelname}</label>
        <br></br>
        <input onChange={onChange} className={inputStyle} type={inputtype} placeholder={inputvalue} value={inputText}></input>
        <label className={labelStyle}>{labelTwo}</label>
      </div>
    
  );
}

export default input;
