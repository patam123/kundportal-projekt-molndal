import React,{useState, useEffect} from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import ResetStyle from "../../design/loginstyle/resetstyle.css";
import ButtonStyle from "../../design/loginstyle/buttonreset.css"

const ResetPassword = () => {

  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  useEffect(() => {
    fetch("http://localhost:3300/gethash", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((response) => response.json())
        .then((data) => setNewPassword(data));
  }, [email])


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ditt nya lösenord är: ${newPassword[0].hash.slice(0,10)}`);
    fetch("http://localhost:3300/resetpassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: newPassword && newPassword[0].hash.slice(0,10),
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
        setEmail();
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <Button cssValue="buttonReset" btnText="Återställa" />
      </form>
    </div>
  );
}

export default ResetPassword;
