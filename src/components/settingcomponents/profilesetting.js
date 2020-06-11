import React from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import ProfilePhoto from "../reusedcomponents/profile-photo";
import User from "../usercomponents/user";
import SettingProfileStyle from "../../design/settingprofileStyle.css";
import ButtonCSS from "../../design/settingbutton.css";

function profileSetting() {
  const user = new User(
    "Example",
    "Person",
    "19800505-5555",
    "example.person@gmail.com",
    "0700000000",
    "Landsvägen 1",
    "40010",
    "Göteborg"
  );
  return (
    <div>
      <div id="profilesettingStyle">
        <div id="photo-style"> <div id="circle"></div>{<ProfilePhoto user={user} />}</div>
        <div id="input-Container-Style">
          <div id="smallInputContainer">
            <Input
              inputStyle="inputStyle"
              inputtype="text"
              inputvalue="Magnus"
              labelname="Förnamn"
            />
            <Input
              inputStyle="inputStyle"
              inputtype="text"
              inputvalue="Persson"
              labelname="Efternamn"
            />
          </div>

          <Input
            inputStyle="inputStyle"
            inputtype="text"
            inputvalue="19800505-5555"
            labelname="Personnummer"
          />

          <Input
            inputStyle="inputStyle"
            inputtype="text"
            inputvalue="Lantmilsgatan 7"
            labelname="Adress"
          />

          <div id="smallInputContainer">
            <Input
              inputStyle="inputStyle"
              inputtype="text"
              inputvalue="Göteborg"
              labelname="Postort"
            />
            <Input
              inputStyle="inputStyle"
              inputtype="text"
              inputvalue="41501"
              labelname="Postnummer"
            />
          </div>
          <Input
            inputStyle="inputStyle"
            inputtype="text"
            inputvalue="073-0546-0465"
            labelname="Telefonnummer"
          />
          <Input
            inputStyle="inputStyle"
            inputtype="text"
            inputvalue="Magnus.persson@hotmail.com"
            labelname="Email"
          />
        </div>
      </div>
      <div className="bottom-style">
        <Button cssValue="btnSettingStyle" btnText="Spara" />
      </div>
    </div>
  );
}

export default profileSetting;
