import React from "react";

function CheckBox(inputtype,checkBoxName) {
  return (
    <div>
      <input type={inputtype} />
      <label>{checkBoxName}</label>
    </div>
  );
}

export default CheckBox;
