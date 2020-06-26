import React from "react";
import Card from "../reusedcomponents/card";
import Profile from "./profilecomponents/profile";
import Possession from "./possessioncomponent/possession";
import HomeStyle from "../../design/homestyle/home.css";
import HeadTitle from "../reusedcomponents/headtitle";

const Home = ({ id, user, shares, industries, suggestedIndustries }) => {
  const getDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 9) {
      month = "0" + month;
    }
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }

    return `${year}-${month}-${day}`;
  };
  return (
    <div id="homeContainer">
      <HeadTitle title="Hem" />
      <p id="welcome-style">
        Välkommen{" "}
        <span style={{ fontWeight: "bold" }}>
          {`${user ? user.FirstName : ""}! `}
        </span>
        {`${
          shares && shares.length > 0
            ? `Ditt innehav blev senast uppdaterad ${getDate()}. Ta gärna en titt!`
            : `Du har inte något innehav tillagt ännu. Du får ett mail såfort det är
        uppdaterad!`
        }`}
      </p>
      <div id="profileContainer">
        <div id="profile-style">
          <Card
            path="/home/setting"
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
            path="/home/portfolio"
            headText="Mitt innehav"
            linkText="Min Portfölj"
            firstSection={<Possession date={getDate()} industries={industries} suggestedIndustries={suggestedIndustries} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
