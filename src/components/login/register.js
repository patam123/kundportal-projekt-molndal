import React, { useState, useEffect } from "react";
import FormInfo from "../reusedcomponents/forminfo";
import Button from "../reusedcomponents/button";
import RegisterCss from "../../design/loginstyle/registerstyle.css";
import ButtonLoginCss from "../../design/loginstyle/buttonlogin.css";

const Register = () => {
  const [email, setNewEmail] = useState();
  const [password, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [lname, setNewLname] = useState();
  const [fname, setNewFname] = useState();
  const [perNum, setNewPerNum] = useState();
  const [telNum, setNewTelNum] = useState();
  const [address, setNewAddress] = useState();
  const [postCode, setNewPostCode] = useState();
  const [postArea, setNewPostArea] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3300/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        fname: fname,
        lname: lname,
        address: address,
        postArea: postArea,
        postCode: postCode,
        perNum: perNum,
        telNum: telNum,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {

  }, []);
  return (
    <div id="registerContainer">
      <h2>Registrera ditt konto</h2> <br></br>
      <form onSubmit={handleSubmit}>
        <FormInfo
          register={true}
          required={true}
          fnameOnChange={(e) => setNewFname(e.target.value)}
          lnameOnChange={(e) => setNewLname(e.target.value)}
          perNumOnChange={(e) => setNewPerNum(e.target.value)}
          telNumOnChange={(e) => setNewTelNum(e.target.value)}
          addressOnChange={(e) => setNewAddress(e.target.value)}
          postAreaOnChange={(e) => setNewPostArea(e.target.value)}
          postCodeOnChange={(e) => setNewPostCode(e.target.value)}
          emailOnChange={(e) => setNewEmail(e.target.value)}
          passwordOnChange={(e) => setNewPassword(e.target.value)}
          repeatPasswordOnChange={(e) => setRepeatPassword(e.target.value)}
        />
        <Button cssValue="btnlogIn" btnText="Registrera" />
      </form>
    </div>
  );
};

export default Register;
