import React from "react";
import Share from "../homecomponents/possessioncomponent/share";
import Portfoliorow from "./portfolio-row";
import User from "../usercomponents/user";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.portfolioContent = this.props.user.shares.map((share) => {
      return (
        <Portfoliorow
          companyName={share.companyName}
          amount={share.amount}
          type={share.type}
          nrOfShares={share.nrOfShares}
          shareNr={share.shareNr}
          sharePct={share.sharePct}
          votePwr={share.votePwr}
        />
      );
    });
  }
  render(){
    return (
        <div>
          <table>
            <tbody key="tablebody">
              <tr key="tablehead">
                <th key="tableheadCo">Företag</th>
                <th key="tableheadAmount">Innehav</th>
                <th key="tableheadType">Aktietyp</th>
                <th key="tableheadNrOfShare">Antal aktier</th>
                <th key="tableheadShareNr">Aktienummer</th>
                <th key="tableheadSharePct">Ägarandel</th>
                <th key="tableheadVotePwr">Röstvärde</th>
              </tr>
              {this.portfolioContent}
            </tbody>
          </table>
        </div>
      );
  }
}

export default Portfolio;
