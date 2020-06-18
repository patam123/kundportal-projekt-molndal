import React from "react";
import Card from "../reusedcomponents/card";
import Profile from "./profilecomponents/profile";
import Possession from "./possessioncomponent/possession";
import HomeStyle from "../../design/homestyle/home.css";
import HeadTitle from "../reusedcomponents/headtitle";

// Home station var min profil och mitt innehav ska anropas här
const Home = ({ id, user, shares, industries, suggestedIndustries }) => {
  return (
    <div id="homeContainer">
      <HeadTitle title="Hem" />
      <p id="welcome-style">
        Välkommen{" "}
        <span style={{ fontWeight: "bold" }}>
          {`${user ? user.FirstName : ""}! `}
        </span>
        {`${
          shares
            ? `Ditt innehav blev senast uppdaterad INSERTDATUMHERE. Ta gärna en titt!`
            : `Du har inte något innehav tillagt ännu. Du får ett mail såfort det är
        uppdaterad!`
        }`}
      </p>
      <div id="profileContainer">
        <div id="profile-style">
          <Card
            path="/setting"
            headText="Min profil"
            linkText="Redigera"
            firstSection={
              <Profile
                fname={user && user.FirstName}
                lname={user && user.LastName}
                email={user && user.Email}
                perNum={user && user.PersonNumber}
                telNum={user && user.PhoneNumber}
                postArea={user && user.PostAddress}
                postCode={user && user.PostCode}
                address={user && user.Address}
                photo={user && user.ProfilePicture}
                industries={industries && industries}
                suggestedIndustries={suggestedIndustries && suggestedIndustries}
              />
            }
          />
        </div>

        <div id="possession-style">
          <Card
            path="/portfolio"
            headText="Mitt innehav"
            linkText="Min Portfölj"
            firstSection={<Possession industries={industries} suggestedIndustries={suggestedIndustries} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
