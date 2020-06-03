import React, { Component } from "react";
import User from "./user";
import ButtonComponent from "./button";

class Profile extends Component {
  render() {
    //istället för hårdkodade värden ska värden från databas in här sen.
    const fname = "Example";
    const lname = "Person";
    const perNum = "19800505-5555";
    const email = "example.person@gmail.com";
    const telNum = "0700000000";
    const address = "Landsvägen 1";
    const postCode = "40010";
    const postArea = "Göteborg";
    // notering för framtida utveckling: behövs konstruktor eller ej.  <- att tänka på till senare

    
    const user = new User(`${fname}`, `${lname}`, `${perNum}`, `${email}`, `${telNum}`, `${address}`, `${postCode}`, `${postArea}`);

    

    //inputs osv ska in i form-komponenten och form-komponenten ska in här(?)
    return (
      <div>
        <label>Förnamn</label>
        <input placeholder={user.fname}></input>
        <label>Efternamn</label>
        <input placeholder={user.lname}></input>
        <ButtonComponent btnText="WOW" />
      </div>
    );
  }
}

export default Profile;
