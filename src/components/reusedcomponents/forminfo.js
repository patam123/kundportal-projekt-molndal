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
          />
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={lname}
            labelname="Efternamn"
          />
        </div>

        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={perNum}
          labelname="Personnummer"
        />

        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={address}
          labelname="Adress"
        />

        <div id="smallInputContainer">
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={postArea}
            labelname="Postort"
          />
          <Input
            inputStyle="inputStyle"
            labelStyle="labelCss"
            inputtype="text"
            inputvalue={postCode}
            labelname="Postnummer"
          />
        </div>
        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={telNum}
          labelname="Telefonnummer"
        />
        <Input
          inputStyle="inputStyle"
          labelStyle="labelCss"
          inputtype="text"
          inputvalue={email}
          labelname="Email"
        />
      </div>
    </div>
  );
}

export default formInfo;
