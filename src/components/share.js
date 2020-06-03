import React, {Component} from 'react';

class Share extends Component{
    constructor(companyName, industry, amountPos, type, nrOfShares, shareNr, sharePct, votePwr ){
        super();
        this.companyName = companyName;
        this.industry = industry;
        this.amountPos = amountPos;
        this.type = type;
        this.nrOfShares = nrOfShares;
        this.shareNr = shareNr;
        this.sharePct = sharePct;
        this.votePwr = votePwr;
    }
}

export default Share;