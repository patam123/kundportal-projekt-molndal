import React from "react";
import Input from "../reusedcomponents/input";
import SettingCss from "../../design/settingprofileStyle.css";
function formInfo({
  fname,
  lname,
  perNum,
  telNum,
  email,
  address,
  postCode,
  postArea,
  fnameOnChange,
  lnameOnChange,
  perNumOnChange,
  addressOnChange,
  telNumOnChange,
  postAreaOnChange,
  postCodeOnChange,
  emailOnChange,
  passwordOnChange,
  repeatPasswordOnChange,
  register,
  required
}) {
  return (
    <div>
      <div id="input-Container-Style">
        <div id="smallInputContainer">
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={fname}
            labelname="Förnamn"
            onChange={fnameOnChange}
            required={required}
          />
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={lname}
            labelname="Efternamn"
            onChange={lnameOnChange}
            required={required}
          />
        </div>

        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={perNum}
          labelname="Personnummer"
          onChange={perNumOnChange}
          required={required}
        />

        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={address}
          labelname="Adress"
          onChange={addressOnChange}
          required={required}
        />

        <div id="smallInputContainer">
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={postArea}
            labelname="Postort"
            onChange={postAreaOnChange}
            required={required}
          />
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={postCode}
            labelname="Postnummer"
            onChange={postCodeOnChange}
            required={required}
          />
        </div>
        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={telNum}
          labelname="Telefonnummer"
          onChange={telNumOnChange}
          required={required}
        />
        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={email}
          labelname="Email"
          onChange={emailOnChange}
          required={required}
        />
        {register && (
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="password"
            labelname="Lösenord"
            onChange={passwordOnChange}
            required={required}
          />
        )}
        {register && (
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="password"
            labelname="Upprepa lösenord"
            onChange={repeatPasswordOnChange}
            required={required}
          />
        )}
      </div>
    </div>
  );
}

export default formInfo;
