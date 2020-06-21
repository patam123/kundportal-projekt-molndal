import React from "react";
import Input from "../reusedcomponents/input";
import LoginCSS from "../../design/loginstyle/login.css";
import Button from "../reusedcomponents/button";
import ButtonCss from "../../design/loginstyle/buttonlogin.css";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();

  function navigateRegister() {
    history.push("/register");
  }

  function navigateResetPass() {
    history.push("/resetpassword");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    history.push("/dashboard");
  };
  return (
    <div id="loginContainer">
      <div id="title">
        <h1>Välkommen till kundportalen!</h1>
      </div>
      <div id="loginCss">
        <form onSubmit={handleSubmit}>
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
          <div id="regisResetContainer">
            <p onClick={navigateResetPass} id="regisReset">
              Glömt lösenord?
            </p>
            <p onClick={navigateRegister} id="regisReset">
              Ny kund?
            </p>
          </div>

          <Button btnText="Logga in" cssValue="btnlogIn" />
        </form>
      </div>
    </div>
  );
}

export default Login;
