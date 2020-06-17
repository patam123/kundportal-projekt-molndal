import React from "react";


const Portfoliorow = ({ companyName, shareValue, type, amount, shareNr, sharePct, votePct }) => {

  return  (
    <tr key={`${companyName}Row`}>
      <td key={`${companyName}Name`}>{companyName && companyName}</td>
      <td key={`${companyName}ShareValue`}>{`${shareValue && shareValue} SEK`}</td>
      <td key={`${companyName}Type`}>{type && type}</td>
      <td key={`${companyName}Amount`}>{`${amount && amount} st`}</td>
      <td key={`${companyName}ShareNr`}>{shareNr && shareNr}</td>
      <td key={`${companyName}SharePct`}>{`${sharePct && sharePct}%`}</td>
      <td key={`${companyName}VotePwr`}>{`${votePct && votePct}%`}</td>
    </tr>
  );
};

export default Portfoliorow;
