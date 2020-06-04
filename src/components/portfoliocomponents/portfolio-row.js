import React from "react";


const Portfoliorow = ({ companyName, amount, type, nrOfShares, shareNr, sharePct, votePwr }) => {

  return  (
    <tr key={`${companyName}Row`}>
      <td key={`${companyName}Name`}>{companyName}</td>
      <td key={`${companyName}Amount`}>{amount}</td>
      <td key={`${companyName}Type`}>{type}</td>
      <td key={`${companyName}NrOfShares`}>{nrOfShares}</td>
      <td key={`${companyName}ShareNr`}>{shareNr}</td>
      <td key={`${companyName}SharePct`}>{sharePct}</td>
      <td key={`${companyName}VotePwr`}>{votePwr}</td>
    </tr>
  );
};

export default Portfoliorow;
