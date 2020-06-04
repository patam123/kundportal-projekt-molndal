import React from "react";

function input({ inputtype, inputname, inputvalue, labelname }) {
  return (
    <div>
      <div>
        <label style={{color: "#A1A8C3"}}>{labelname}</label>
        <br></br>
        <input type={inputtype} name={inputname} value={inputvalue}></input>
      </div>
    </div>
  );
}

export default input;
