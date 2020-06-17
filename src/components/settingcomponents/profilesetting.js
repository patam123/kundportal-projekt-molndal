import React, { useState } from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import ProfilePhoto from "../reusedcomponents/profile-photo";
import User from "../usercomponents/user";
import FormInfo from "../reusedcomponents/forminfo";
import SettingProfileStyle from "../../design/settingprofileStyle.css";
import ButtonCSS from "../../design/settingbutton.css";

const ProfileSetting = ({
  fname,
  lname,
  perNum,
  telNum,
  email,
  address,
  postCode,
  postArea,
  photo,
  handleSubmit,
}) => {
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
  const [newEmail, setNewEmail] = useState();
  const [newLname, setNewLname] = useState();
  const [newFname, setNewFname] = useState();
  const [newPerNum, setNewPerNum] = useState();
  const [newTelNum, setNewTelNum] = useState();
  const [newAddress, setNewAddress] = useState();
  const [newPostCode, setNewPostCode] = useState();
  const [newPostArea, setNewPostArea] = useState();
  const [newPhoto, setNewPhoto] = useState();


  const handleUpdate = () => {

    fetch("http://localhost:3300/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newEmail?newEmail:email,
          oldEmail: email,
          fname: newFname?newFname:fname,
          lname: newLname?newLname:lname,
          address: newAddress?newAddress:address,
          postArea: newPostArea?newPostArea:postArea,
          postCode: newPostCode?newPostCode:postCode,
          perNum: newPerNum?newPerNum:perNum,
          telNum: newTelNum?newTelNum:telNum,
          photo: newPhoto?newPhoto:photo
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
  }

  return (
    <div>
        <div id="profilesettingStyle">
          <div id="photo-style">
            {" "}
            <div id="circle"></div>
            {<ProfilePhoto picture={photo} />}
          </div>
          <div>
            <div id="input-Container-Style">
              <div id="smallInputContainer">
                <Input
                  inputStyle="inputStyle"
                  labelStyle="labelCss"
                  inputtype="text"
                  inputvalue={newFname?newFname:fname}
                  labelname="Förnamn"
                  onChange={(e) => setNewFname(e.target.value)}
                />
                <Input
                  inputStyle="inputStyle"
                  labelStyle="labelCss"
                  inputtype="text"
                  inputvalue={newLname?newLname:lname}
                  labelname="Efternamn"
                  onChange={(e) => setNewLname(e.target.value)}
                />
              </div>

              <Input
                inputStyle="inputStyle"
                labelStyle="labelCss"
                inputtype="text"
                inputvalue={newPerNum?newPerNum:perNum}
                labelname="Personnummer"
                onChange={(e) => setNewPerNum(e.target.value)}
              />

              <Input
                inputStyle="inputStyle"
                labelStyle="labelCss"
                inputtype="text"
                inputvalue={newAddress?newAddress:address}
                labelname="Adress"
                onChange={(e) => setNewAddress(e.target.value)}
              />

              <div id="smallInputContainer">
                <Input
                  inputStyle="inputStyle"
                  labelStyle="labelCss"
                  inputtype="text"
                  inputvalue={newPostArea?newPostArea:postArea}
                  labelname="Postort"
                  onChange={(e) => setNewPostArea(e.target.value)}
                />
                <Input
                  inputStyle="inputStyle"
                  labelStyle="labelCss"
                  inputtype="text"
                  inputvalue={newPostCode?newPostCode:postCode}
                  labelname="Postnummer"
                  onChange={(e) => setNewPostCode(e.target.value)}
                />
              </div>
              <Input
                inputStyle="inputStyle"
                labelStyle="labelCss"
                inputtype="text"
                inputvalue={newTelNum?newTelNum:telNum}
                labelname="Telefonnummer"
                onChange={(e) => setNewTelNum(e.target.value)}
              />
              <Input
                inputStyle="inputStyle"
                labelStyle="labelCss"
                inputtype="text"
                inputvalue={newEmail?newEmail:email}
                labelname="Email"
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="bottom-style">
          <Button isClicked={handleUpdate} cssValue="btnSettingStyle" btnText="Spara" />
        </div>
    </div>
  );
};

export default ProfileSetting;
