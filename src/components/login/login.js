import React from "react";
import Input from "../reusedcomponents/input";
import LoginCSS from "../../design/loginstyle/login.css";

function Login(props) {
  return (
    <div id="loginContainer">
      <div id="title">
        <h1>Välkommen till kundportalen!</h1>
      </div>
      <div id="loginCss">
        <div className="loginSubcontainer">
          <p id="userIcon"></p>
          <Input
            container="inputContainer"
            inputStyle="input-style"
            inputtype="text"
            inputvalue="Användarnamn"
          />
        </div>
        <br></br>
        <div className="loginSubcontainer">
          <div id="passwordIcon"></div>
          <Input
            container="inputContainer"
            inputStyle="input-style"
            inputtype="text"
            inputvalue="Lösenord"
          />
        </div>
        <br></br>
        <p id="forgetStyle">Glömt lösenord?</p>
        <Input
          inputStyle="buttonStyle"
          inputtype="submit"
          inputText="Logga in"
        />
      </div>
    </div>
  );
}

export default Login;
