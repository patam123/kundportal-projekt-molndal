import React from "react";
import PossessionStyle from "../../../design/homestyle/possessionstyle.css";

const Possession = ({ suggestedIndustries, industries, date }) => {

  const totalShareValue = suggestedIndustries.reduce(
    (tot, share) => tot + share.shareValue,
    0
  );


  //alfabetisk ordning
  const sortedSuggestedIndustries = suggestedIndustries.sort((a, b) =>
    a.industry.localeCompare(b.industry)
  );
  const sortedIndustries = industries.sort((a, b) =>
    a.industry.localeCompare(b.industry)
  );

  const getCompanyIndustries = (e) => {
    let text = "";
    let firstCount = 0;
    let secondCount = 0;
    for (let i = 0; i < sortedIndustries.length; i++) {
      if (sortedIndustries[i].industry === e.industry) {
        firstCount++;
        if (firstCount > 2) {
          secondCount++;
        } else {
          text += `${sortedIndustries[i].company}, `;
        }
      } else {
        text = text.trim();
        text = text.replace(/,+$/, "");
        if (secondCount > 0) {
          text += ` +${secondCount}`;
        }
        secondCount = 0;
        firstCount = 0;

      }
      if (i === sortedIndustries.length - 1) {
        text = text.trim();
        text = text.replace(/,+$/, "");
        if (secondCount > 0) {
          text += ` +${secondCount}`;
        }
      }
    }

    return text;
  };

  return (
    <div className="possession">
      <div>
        <span className="possession-amount">{`${Math.round(totalShareValue)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} SEK `}</span>
        <span className="label-text">{`Uppdaterat: ${date}`}</span>
      </div>
      <div id="statistic-style">
        {sortedSuggestedIndustries.map((element, index) => (
          <div
          key={`bar${index}`}
            style={{
              backgroundColor: element.color,
              width: (element.shareValue / totalShareValue) * 100 + "%",
            }}
          ></div>
        ))}
      </div>
      <div>
        {industries.length > 0 ? sortedSuggestedIndustries.map((element, index) => (
          <div key={`industry${index}`} id="sectorStyle">
            <div
              style={{ backgroundColor: `${element.color}` }}
              className="rectangle"
            ></div>
            <div id="sectorContainer">
              <li key={index}>{element.industry}</li>
              <p style={{ opacity: "0.5" }}>{getCompanyIndustries(element)}</p>
            </div>
            <p style={{ opacity: "0.5" }}>
              {element.shareValue
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
              SEK
            </p>
          </div>
        )): "Inget innehav tillgänglig ännu"}
      </div>
    </div>
  );
};

export default Possession;
