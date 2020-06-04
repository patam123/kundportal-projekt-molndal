import React from "react";
import User from "../../usercomponents/user";
import Userdata from "../../usercomponents/userdata";
import Photo from "../../reusedcomponents/profile-photo";



const Profile = () => {
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

export default Profile;
