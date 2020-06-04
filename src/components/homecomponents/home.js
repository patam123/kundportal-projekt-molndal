import React from "react";
import Card from "../reusedcomponents/card";
import Profile from "./profilecomponents/profile";
import Possession from "./possessioncomponent/possession";
import HomeStyle from "../../design/home.css"
// Home station var min profil och mitt innehav ska anropas här
const Home =()=>{
  
    return (
      <div id="homeContainer">
      <div id="profile-style">
        <Card
          headText="Min profil"
          btnText="Redigera"
          firstSection={<Profile/>}
        />
        
      </div>
      
      <div id="possession-style">
      <Card
      headText="Mitt innehav"
      btnText="Min Portfölj"
      firstSection={<Possession/>}
    />
    

      </div>

      </div>
    );
  }


export default Home;
