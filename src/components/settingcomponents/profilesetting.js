import React from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";


function profileSetting() {
  return (
    <div>
     
      <Input
        inputtype="text"
        inputName="Peter"
        inputvalue="Peter"
        labelname="Förnamn"
      />
      <Input
        inputtype="text"
        inputName="Peter"
        inputvalue="Peter"
        labelname="Efternamn"
      />
      <Input
        inputtype="text"
        inputName="Peter"
        inputvalue="Peter"
        labelname="Personnummer"
      />
      <Input
        inputtype="text"
        inputName="Peter"
        inputvalue="Peter"
        labelname="Adress"
      />
      <Input
        inputtype="text"
        inputName="Peter"
        inputvalue="Peter"
        labelname="Postort"
      />
      <Input
        inputtype="text"
        inputName="Peter"
        inputvalue="Peter"
        labelname="Postnummer"
      />
      <Input
        inputtype="text"
        inputName="Peter"
        inputvalue="Peter"
        labelname="Telefonnummer"
      />
      <Input
        inputtype="text"
        inputName="Peter"
        inputvalue="Peter"
        labelname="email"
      />
      <Button btnText="Spara" />
    </div>
  );
}

export default profileSetting;
