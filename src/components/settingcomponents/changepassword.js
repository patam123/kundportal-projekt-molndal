import React from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import ButtonCSS from "../../design/settingbutton.css";

const ChangePassword = () => {
  return (
    <div id="profilesettingStyle">
      <div id="input-Container-Style">
        <Input
          inputStyle="inputStyle"
          inputtype="text"
          labelname="Nuvarande lösenord"
        />
        <Input
          inputStyle="inputStyle"
          inputtype="text"
          labelname="Nytt lösenord"
        />
        <Input
          inputStyle="inputStyle"
          inputtype="text"
          labelname="Bekräfta nytt lösenord"
        />
      </div>

      <div className="bottom-style">
        <Button cssValue="btnSettingStyle" btnText="Spara" />
      </div>
    </div>
  );
};

export default ChangePassword;
