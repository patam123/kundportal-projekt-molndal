import React from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";


const ChangePassword = (handleSubmit) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="profilesettingStyle">
          <div id="input-Container-Style">
            <Input
              inputStyle="inputStyle"
              inputtype="text"
              labelname="Nuvarande lösenord"
            />
            <Input
              inputStyle="inputStyle"
              inputtype="text"
              labelname="Nytt lösenord"
            />
            <Input
              inputStyle="inputStyle"
              inputtype="text"
              labelname="Bekräfta nytt lösenord"
            />
          </div>
        </div>

        <div className="bottom-style">
          <Button cssValue="btnStyle" btnText="Spara" />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
