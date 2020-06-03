import React, { Component } from "react";
import User from "./user";
import ButtonComponent from "./button";
import Card from "./card";
import Userdata from "./userdata";

class Profile extends Component {
  render() {
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
        <Userdata user={user}/>  
      </div>
    );
  }
}

export default Profile;
