import React from "react";
import FormInfo from "../reusedcomponents/forminfo";
import Button from "../reusedcomponents/button";
import RegisterCss from "../../design/loginstyle/registerstyle.css";
import ButtonLoginCss from "../../design/loginstyle/buttonlogin.css"

function register() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submit");
  }
  return (
    <div id="registerContainer">
        <h2>Registrera ditt kontor</h2> <br></br>
      <form onSubmit={handleSubmit}>
        <FormInfo/>
        <Button cssValue="btnlogIn" btnText="Registrera" />
      </form>
    </div>
  );
}

export default register;
