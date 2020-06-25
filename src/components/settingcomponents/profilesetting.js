import React, { useState } from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import ProfilePhoto from "../reusedcomponents/profile-photo";
import FormInfo from "../reusedcomponents/forminfo";
import SettingProfileStyle from "../../design/settingprofileStyle.css";

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
        email: newEmail ? newEmail : email,
        oldEmail: email,
        fname: newFname ? newFname : fname,
        lname: newLname ? newLname : lname,
        address: newAddress ? newAddress : address,
        postArea: newPostArea ? newPostArea : postArea,
        postCode: newPostCode ? newPostCode : postCode,
        perNum: newPerNum ? newPerNum : perNum,
        telNum: newTelNum ? newTelNum : telNum,
        photo: newPhoto ? newPhoto : photo,
      }),
    })
      .then((response) => response.json())
      .then((data) => alert("Your profile has been updated!"));
  };

  return (
    <div>
      <div id="profilesettingStyle">
        <div id="photo-style">        
          <div id="circle">
          <input id="file-dialogue" type="file" onChange={(e) => setNewPhoto(e.target.value)} accept="image/x-png,image/gif,image/jpeg"/>
          </div>
          {<ProfilePhoto picture={photo} />}
        </div>
        <div>
          <div id="input-Container-Style">
            <div id="smallInputContainer">
              <FormInfo
                email={newEmail ? newEmail : email}
                fname={newFname ? newFname : fname}
                lname={newLname ? newLname : lname}
                address={newAddress ? newAddress : address}
                postArea={newPostArea ? newPostArea : postArea}
                postCode={newPostCode ? newPostCode : postCode}
                perNum={newPerNum ? newPerNum : perNum}
                telNum={newTelNum ? newTelNum : telNum}
                fnameOnChange={(e) => setNewFname(e.target.value)}
                lnameOnChange={(e) => setNewLname(e.target.value)}
                perNumOnChange={(e) => setNewPerNum(e.target.value)}
                telNumOnChange={(e) => setNewTelNum(e.target.value)}
                addressOnChange={(e) => setNewAddress(e.target.value)}
                postAreaOnChange={(e) => setNewPostArea(e.target.value)}
                postCodeOnChange={(e) => setNewPostCode(e.target.value)}
                emailOnChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="bottom-style">
          <Button
            isClicked={handleUpdate}
            cssValue="btnStyle"
            btnText="Spara"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
