import React from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import ProfilePhoto from "../reusedcomponents/profile-photo";
import User from "../usercomponents/user";
import FormInfo from "../reusedcomponents/forminfo";
import SettingProfileStyle from "../../design/settingprofileStyle.css";


function profileSetting({
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
}) {
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
      <form onSubmit={handleSubmit}>
        <div id="profilesettingStyle">
          <div id="photo-style">
            {" "}
            <div id="circle"></div>
            {<ProfilePhoto user={user} />}
          </div>
          <FormInfo
            fname={fname}
            lname={lname}
            perNum={perNum}
            telNum={telNum}
            email={email}
            address={address}
            postCode={postCode}
            postArea={postArea}
          />
        </div>
        <div className="bottom-style">
          <Button cssValue="btnStyle" btnText="Spara" />
        </div>
      </form>
    </div>
  );
}

export default profileSetting;
