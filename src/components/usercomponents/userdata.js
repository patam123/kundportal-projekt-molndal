import React, { Component } from "react";
import User from "./user";
import Home from "../../design/homestyle/homeprofilestyle.css";

class Userdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: this.props.user.fname,
      lname: this.props.user.lname,
      perNum: this.props.user.perNum,
      email: this.props.user.email,
      telNum: this.props.user.telNum,
      address: this.props.user.address,
      postCode: this.props.user.postCode,
      postArea: this.props.user.postArea,
    };
  }
  render() {
    return (
      <div id="contactContainer">
        <div id="contact-style">
          <p className="nameContact">Telefon:</p>
          <p className="nameContact">Mail:</p>
          <p className="nameContact">Address:</p>
          <p className="nameContact">Postnummer:</p>
          <p className="nameContact">Postort:</p>
        </div>
        <div id="contact-style">
          <p>{this.state.telNum}</p>
          <p>{this.state.email}</p>
          <p>{this.state.address}</p>
          <p>{this.state.postCode}</p>
          <p>{this.state.postArea}</p>
        </div>
      </div>
    );
  }
}

export default Userdata;
