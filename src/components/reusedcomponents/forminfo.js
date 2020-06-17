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
  onChange,
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
            onChange={onChange}
          />
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={lname}
            labelname="Efternamn"
            onChange={onChange}
          />
        </div>

        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={perNum}
          labelname="Personnummer"
          onChange={onChange}
        />

        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={address}
          labelname="Adress"
          onChange={onChange}
        />

        <div id="smallInputContainer">
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={postArea}
            labelname="Postort"
            onChange={onChange}
          />
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={postCode}
            labelname="Postnummer"
            onChange={onChange}
          />
        </div>
        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={telNum}
          labelname="Telefonnummer"
          onChange={onChange}
        />
        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={email}
          labelname="Email"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default formInfo;
