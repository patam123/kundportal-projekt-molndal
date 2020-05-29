import React from "react";
import ButtonComponent from "./button";

//tror att denna variabel ska bort sen. profile.js ersätter denna.

const profile = () => {
  return (
    <div>
        <div className="head">
        <h2></h2>
        <ButtonComponent btnText="wow" />
        <button>insert component here instead of tags</button>
        </div>
        <div className="profile-small">
        <img>picture box component</img>
        <p>
        {}
        <br></br>
        <label></label>
        {}
        </p>
        </div>
        
        <div>
        <label></label>

        </div>

    </div>
  
  );
};

export function section(text) {
  return <section>{text}</section>;
}
