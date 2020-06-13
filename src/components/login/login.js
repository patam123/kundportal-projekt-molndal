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
        <div className="loginSubcontainer"><div id="userIcon"></div><Input container="inputContainer" inputStyle="input-style" inputtype="text" inputvalue="Användarnamn"/></div><br></br>
       <div className="loginSubcontainer"><div id="passwordIcon"></div><Input  container="inputContainer" inputStyle="input-style" inputtype="text" inputvalue="Lösenord"/></div>
        <Input inputStyle="buttonStyle" inputtype="submit" inputText="Login" />
      </div>
    </div>
  );
}

export default Login;
