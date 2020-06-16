import React from "react";
import Card from "../reusedcomponents/card";
import Profile from "./profilecomponents/profile";
import Possession from "./possessioncomponent/possession";
import HomeStyle from "../../design/homestyle/home.css";
import HeadTitle from "../reusedcomponents/headtitle";

// Home station var min profil och mitt innehav ska anropas här
const Home = ({ redigera, minport, id, user, shares }) => {
  const linkArr = [
    {
      path: "/portfolio",
      icon: "port-Logo",
      name: "Min Portfölj",
      style: "inactive",
    },
    {
      path: "/setting",
      icon: "setting-Logo",
      name: "Inställningar",
      style: "inactive",
    },
  ];

  return (
    <div id="homeContainer">
      <HeadTitle title="Hem" />
      <p id="welcome-style">
        Välkommen{" "}
        <span style={{ fontWeight: "bold" }}>
          {`${user ? user.FirstName : ""}! `}
        </span>
          {`${shares?`Ditt innehav blev senast uppdaterad INSERTDATUMHERE. Ta gärna en titt!` : `Du har inte något innehav tillagt ännu. Du får ett mail såfort det är
        uppdaterad!`}`}
      </p>
      <div id="profileContainer">
        <div id="profile-style">
          <Card
            path="/setting"
            headText="Min profil"
            btnText="Redigera"
            handleBtnClick={redigera}
            keyId="2"
            firstSection={
              <Profile
                fname={user && user.FirstName}
                lname={user && user.LastName}
                perNum={user && user.PersonNumber}
                telNum={user && user.PhoneNumber}
                postArea={user && user.PostAddress}
                postCode={user && user.PostCode}
                address={user && user.Address}
                email={user && user.Email}
              />
            }
          />
        </div>

        <div id="possession-style">
          <Card
            path="/portfolio"
            headText="Mitt innehav"
            btnText="Min Portfölj"
            handleBtnClick={minport}
            keyId="1"
            firstSection={<Possession />}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
