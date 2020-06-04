import React, {Component} from 'react';

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
    }

}

export default User;
