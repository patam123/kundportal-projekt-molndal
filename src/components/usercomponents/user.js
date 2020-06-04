import React, {Component} from 'react';
import Share from "../homecomponents/possessioncomponent/share";

const share1 = new Share("Volvo", "Fordon", 2000, "B", 5, "0000-0000", 1+" %", 1+" %");
const share2 = new Share("Ericsson", "Telekom", 2000, "B", 5, "0000-0000", 1+" %", 1+" %");

class User extends Component{
    constructor(fname, lname, perNum, email, telNum, address, postCode, postArea ){
        super();
        this.fname = fname;
        this.lname = lname;
        this.perNum = perNum;
        this.email = email;
        this.telNum = telNum;
        this.address = address;
        this.postCode = postCode;
        this.postArea = postArea;
        this.pic = "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        this.shares = [share1, share2];
    }

}

export default User;
