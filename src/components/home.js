import React from "react";
import Header from "./header";
import Section from "./section.js";
import Card from "./card";
import Profile from "./profile";
import Possession from "./possession";

// Home station var min profil och mitt innehav ska anropas här
class Home extends React.Component {
  //konstruktorn behövs kanske inte?
  constructor(title) {
    super();
    this.title = title;
  }

  render() {
    return (
      <div>
      <div id="profile">
        <Card
          headText="Min profil"
          btnText="Redigera"
          firstSection={<Profile />}
        />
        
      </div>
      
      <div id="possession">
      <Card
      headText="Mitt innehav"
      btnText="Min Portfölj"
      firstSection={<Possession />}
    />
    

      </div>

      </div>
    );
  }
}

export default Home;
