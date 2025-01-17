import React, { useState } from "react";
import Input from "../reusedcomponents/input";
import LoginCSS from "../../design/loginstyle/login.css";
import Button from "../reusedcomponents/button";
import ButtonCss from "../../design/loginstyle/buttonlogin.css";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();

  function navigateRegister() {
    history.push("/register");
  }

  function navigateResetPass() {
    history.push("/resetpassword");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      fetch("http://localhost:3300/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw Error("Fel email eller lösenord");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          if (data) {
            sessionStorage.setItem("userData", JSON.stringify(data));
            history.push(`/home`);
          }
        })
        .catch(() => {
          setErrorMessage(true);
        });
    }
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
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          <br></br>
          <div className="loginSubcontainer">
            <div id="passwordIcon"></div>
            <Input
              container="inputContainer"
              inputStyle="input-style"
              inputtype="password"
              inputvalue="Lösenord"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
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
          {errorMessage ? (
            <p
              style={{
                color: "white",
                padding: "3px",
                width: "100%",
                textAlign: "center",
                marginTop: "20px",
                fontSize: "15px",
                background: "red",
                borderRadius: "4px",
              }}
            >
              Fel email eller lösenord, försök igen!
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
