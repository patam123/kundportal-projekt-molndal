import React from "react";
import Input from "../reusedcomponents/input";
import LoginCSS from "../../design/loginstyle/login.css";
import Button from "../reusedcomponents/button";
import ButtonCss from "../../design/loginstyle/buttonlogin.css";

function Login(props) {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submit");
  }
  return (
    <div id="loginContainer">
      <div id="title">
        <h1>Välkommen till kundportalen!</h1>
      </div>
      <div id="loginCss">
        <form onSubmit="handleSubmit">
          
          <div className="loginSubcontainer">
            <p id="userIcon"></p>

            <Input
              container="inputContainer"
              inputStyle="input-style"
              inputtype="text"
              inputvalue="E-post"
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

          <Button btnText="Logga in" cssValue="btnlogIn"/>
         
        </form>
      </div>
    </div>
  );
}

export default Login;
