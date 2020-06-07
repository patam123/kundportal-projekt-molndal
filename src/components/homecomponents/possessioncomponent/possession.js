import React from "react";
import User from "../../usercomponents/user";
import Share from "./share";

const Possession = () => {
  const share1 = new Share(
    "Patrick ",
    "Finans",
    1,
    "B",
    100,
    "00001-111",
    1 + "%",
    1 + "%"
  );
  const share2 = new Share(
    "Volvo",
    "Finans",
    30000,
    "A",
    150,
    "0000-0000",
    1 + "%",
    1 + "%"
  );
  const shares = [share1, share2];

  let sum = shares.reduce((tot, share) => tot + share.amount, 0);
  const getDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 9) {
      month = "0" + month;
    }
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }

    return `Uppdaterad: ${year}-${month}-${day}`;
  };

  return (
    <div className="possession">
      <div><span className="possession-amount">{`${sum} SEK` }</span><span className="label-text">{getDate()}</span></div>
      <div>
        {shares.map((element, index) => (
          <li key={index}>{element.industry}</li>
        ))}
      </div>
    </div>
  );
}


export default Possession;
