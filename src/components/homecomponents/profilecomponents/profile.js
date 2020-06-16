import React from "react";
import User from "../../usercomponents/user";
import Userdata from "../../usercomponents/userdata";
import Photo from "../../reusedcomponents/profile-photo";
import HomeProfileCss from "../../../design/homestyle/homeprofilestyle.css";

const Profile = ({
  fname,
  lname,
  perNum,
  telNum,
  email,
  address,
  postCode,
  postArea,
  photo,
}) => {
  const user = new User(
    "Magnus",
    "Person",
    "19800505-5555",
    "example.person@gmail.com",
    "0700000000",
    "Landsvägen 1",
    "40010",
    "Göteborg"
  );

  return (
    <div id="profileMainContainer">
      <div id="pic-info-style">
        <Photo user={user} />
        <div>
          <p id="userNamestyle">{`${fname} ${lname}`}</p>
          <p className="label-text">Person Nr/Organisations Nr</p>
          <p>{`${perNum}`}</p>
        </div>
      </div>
      <p className="title">Föredragna Industrier</p>

      <div id="contact">
        <p className="title">Kontaktuppgifter</p>

        <Userdata
          telNum={telNum}
          email={email}
          address={address}
          postCode={postCode}
          postArea={postArea}
        />
      </div>
    </div>
  );
};

export default Profile;
