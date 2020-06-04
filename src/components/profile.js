import React, { Component } from "react";
import User from "./user";
import Userdata from "./userdata";
import Photo from "./profile-photo";

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
        <Photo user={user} />
        <p>{`${user.fname} ${user.lname}`}</p>
        <p className="label-text">Person Nr/Organisations Nr</p>
        <p>{`${user.perNum}`}</p>    
        <Userdata user={user}/>  
      </div>
    );
  }
}

export default Profile;
