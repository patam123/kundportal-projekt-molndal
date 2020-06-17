import React, {Component} from 'react';

class Share extends Component{
    constructor(companyName, industry,color, amount, type, nrOfShares, shareNr, sharePct, votePwr ){
        super();
        this.companyName = companyName;
        this.industry = industry;
        this.color=color;
        this.amount = amount;
        this.type = type;
        this.nrOfShares = nrOfShares;
        this.shareNr = shareNr;
        this.sharePct = sharePct;
        this.votePwr = votePwr;
    }
}

export default Share;