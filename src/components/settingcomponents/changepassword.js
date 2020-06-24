import React, { useState, useEffect } from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";


const ChangePassword = ({ handleSubmit, email, hash }) => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  useEffect(() => {
    console.log(oldPassword);
    console.log(newPassword);
    console.log(confirmNewPassword);

  }, [oldPassword, newPassword, confirmNewPassword] )
  const handleUpdate = () => {
    console.log(hash)
    if (newPassword === confirmNewPassword) {
      fetch("http://localhost:3300/changepassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          newPassword: newPassword,
          oldPassword: oldPassword,
          hash: hash
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
        <div id="profilesettingStyle">
          <div id="input-Container-Style">
            <Input
              inputStyle="inputStyle"
              inputtype="password"
              labelname="Nuvarande lösenord"
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              inputStyle="inputStyle"
              inputtype="password"
              labelname="Nytt lösenord"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              inputStyle="inputStyle"
              inputtype="password"
              labelname="Bekräfta nytt lösenord"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="bottom-style">
          <Button isClicked={handleUpdate} cssValue="btnStyle" btnText="Spara" />
        </div>
    </div>
  );
};

export default ChangePassword;
