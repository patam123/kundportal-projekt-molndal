import React from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import ResetStyle from "../../design/loginstyle/resetstyle.css";
import ButtonStyle from "../../design/loginstyle/buttonreset.css"

function resetPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div id="resetContainer">
      <h1 id="resetTitle">Återställa Ditt lösenord</h1>
      <form id="resetForm" onSubmit={handleSubmit}>
        <Input
          container="textAndLable"
          inputtype="text"
          inputStyle="input-Style"
          labelname=" Din email-adress:"
        />
        <br></br>
        <Button cssValue="buttonReset" btnText="Återställa" />
      </form>
    </div>
  );
}

export default resetPassword;
