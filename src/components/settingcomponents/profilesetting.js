import React from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import ProfilePhoto from "../reusedcomponents/profile-photo";
import User from "../usercomponents/user";
import SettingProfileStyle from "../../design/settingprofileStyle.css"

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
    <div id="settingProfileStyle">
    <div id="photo-style">{<ProfilePhoto user={user} />}</div>
      <div id="input-Container-Style">    
        <div id="first-last-NameContainer">
          <Input
            inputStyle="firstname-style"
            inputtype="text"
            inputName="Peter"
            inputvalue="Peter"
            labelname="Förnamn"
          />
          <Input
          inputStyle="lastname-style"
            inputtype="text"
            inputName="Peter"
            inputvalue="Peter"
            labelname="Efternamn"
          />
        </div>

        <Input
          inputtype="text"
          inputName="Peter"
          inputvalue="Peter"
          labelname="Personnummer"
        />
        <Input
          inputtype="text"
          inputName="Peter"
          inputvalue="Peter"
          labelname="Adress"
        />
        <Input
          inputtype="text"
          inputName="Peter"
          inputvalue="Peter"
          labelname="Postort"
        />
        <Input
          inputtype="text"
          inputName="Peter"
          inputvalue="Peter"
          labelname="Postnummer"
        />
        <Input
          inputtype="text"
          inputName="Peter"
          inputvalue="Peter"
          labelname="Telefonnummer"
        />
        <Input
          inputtype="text"
          inputName="Peter"
          inputvalue="Peter"
          labelname="Email"
        />
      </div>
      <Button btnText="Spara" />
      
    </div>
  );
}

export default profileSetting;
