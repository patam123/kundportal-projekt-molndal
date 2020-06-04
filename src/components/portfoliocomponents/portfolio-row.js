import React from "react";


const Portfoliorow = ({ companyName, amount, type, nrOfShares, shareNr, sharePct, votePwr }) => {

  return  (
    <tr>
      <td key=`{${companyName}}`>{companyName}</td>
      <td>{amount}</td>
      <td>{type}</td>
      <td>{nrOfShares}</td>
      <td>{shareNr}</td>
      <td>{sharePct}</td>
      <td>{votePwr}</td>
    </tr>
  );
};

export default Portfoliorow;
