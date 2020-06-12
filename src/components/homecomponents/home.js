import React from "react";
import Card from "../reusedcomponents/card";
import Profile from "./profilecomponents/profile";
import Possession from "./possessioncomponent/possession";
import HomeStyle from "../../design/homestyle/home.css";
import HeadTitle from "../reusedcomponents/headtitle";


// Home station var min profil och mitt innehav ska anropas här
const Home = () => {
  return (
    <div id="homeContainer">
      <HeadTitle title="Hem" />
      <p id="welcome-style">
        Välkommen <span style={{ fontWeight: "bold" }}>Magnus</span>! du har
        inte något innehav tillagt ännu. Du får ett mail såfort det är
        uppdaterad!
      </p>
      <div id="profileContainer">
        <div id="profile-style">
          <Card
            headText="Min profil"
            btnText="Redigera"
            firstSection={<Profile />}
          />
        </div>

        <div id="possession-style">
          <Card
            headText="Mitt innehav"
            btnText="Min Portfölj"
            firstSection={<Possession />}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
