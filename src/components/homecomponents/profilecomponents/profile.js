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
  industries,
  suggestedIndustries,
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

    const sortedIndustries = suggestedIndustries.sort((a, b) =>
      a.shareValue < b.shareValue ? 1 : b.shareValue < a.shareValue ? -1 : 0
    );


  return (
    <div id="profileMainContainer">
      <div id="pic-info-style">
        <Photo picture={photo} />
        <div>
          <p id="userNamestyle">{`${fname} ${lname}`}</p>
          <p className="label-text">Person Nr/Organisations Nr</p>
          <p>{`${perNum}`}</p>
        </div>
      </div>
      <p className="title">Föredragna Industrier</p>
      <div id="industriesStyle">
        <div>
          <p className="industryList">{sortedIndustries.length > 0 ? sortedIndustries[0].industry : "Ej tillgängligt"}</p>
          {sortedIndustries.length > 1 && <p className="industryList">{sortedIndustries[1].industry}</p>}
        </div>
        <div>
          {sortedIndustries.length > 2 && <p className="industryList">{sortedIndustries[2].industry}</p>}
          {sortedIndustries.length > 3 && <p className="industryList">{sortedIndustries[3].industry}</p>}
        </div>
      </div>

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
