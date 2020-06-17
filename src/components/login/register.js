import React from "react";
import FormInfo from "../reusedcomponents/forminfo";
import Button from "../reusedcomponents/button";
import RegisterCss from "../../design/loginstyle/registerstyle.css"

function register() {
  return (
    <div id="registerContainer">
        <h2>Registrera ditt kontor</h2> <br></br>
      <form>
        <FormInfo/>
        <Button cssValue="btnSettingStyle" btnText="Registrera" />
      </form>
    </div>
  );
}

export default register;
