import React, { Component } from 'react';
import User from  './user'

class Userdata extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          fname: this.props.user.fname,
          lname: this.props.user.lname,
          perNum: this.props.user.perNum,
          email: this.props.user.email,
          telNum: this.props.user.telNum,
          address: this.props.user.address,
          postCode: this.props.user.postCode,
          postArea: this.props.user.postArea,
    
        }
      }
    render() {
        return (

            <div>
                <p><span>Telefon:</span>{this.state.telNum}</p>
                <p><span>Email:</span>{this.state.email}</p>
                <p><span>Address:</span>{this.state.address}</p>
                <p><span>Postnummer:</span>{this.state.postCode}</p>
                <p><span>Postord:</span>{this.state.postArea}</p>
            </div>
        );
    }
}

export default Userdata;