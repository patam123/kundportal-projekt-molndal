import React, {Component} from 'react';

class Share extends Component{
    constructor(companyName, amountPos, type, nrOfShares, shareNr, sharePct, votePwr ){
        super();
        this.companyName = companyName;
        this.amountPos = amountPos;
        this.type = type;
        this.nrOfShares = nrOfShares;
        this.shareNr = shareNr;
        this.sharePct = sharePct;
        this.votePwr = votePwr;
    }
}

export default Share;