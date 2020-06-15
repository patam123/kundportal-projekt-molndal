
import React from 'react';
import Home from "../../design/homestyle/homeprofilestyle.css";


const Userdata = ({fname,lname,perNum,email,telNum,address,postCode,postArea}) => {
  const personObj={
      firstname: fname,
      lastname: lname,
      personnumber: perNum,
      telefon: telNum,
      addr: address,
      postcode: postCode,
      postarea: postArea
  }
  return (
    <div>
    <div id="contact-style">
    <p className="nameContact">Telefon:</p>
    <p className="nameContact">Mail:</p>
    <p className="nameContact">Address:</p>
    <p className="nameContact">Postnummer:</p>
    <p className="nameContact">Postort:</p>
  </div>
  <div id="contact-style">
    <p>{personObj.firstname}</p>
    <p>{personObj.lastname}</p>
    <p>{personObj.personnumber}</p>
    <p>{personObj.telefon}</p>
    <p>{personObj.addr}</p>
    <p>{personObj.postcode}</p>
    <p>{personObj.postarea}</p>
    
  </div>
    </div>
  );
}

export default Userdata;
