import React from "react";

function input({ inputtype, inputvalue, labelname,inputStyle }) {
  return (
    <div>
      <div>
        <label style={{color: "#A1A8C3"}}>{labelname}</label>
        <br></br>
        <input id={inputStyle} type={inputtype} placeholder={inputvalue}></input>
      </div>
    </div>
  );
}

export default input;
