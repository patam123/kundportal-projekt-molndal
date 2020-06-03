import React, { Component } from 'react';
import User from  './user';
import Home from '../design/home.css'


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

            <div id="contact-style">
                <p><span className="span-style">Telefon:</span>{this.state.telNum}</p>
                <p><span className="span-style">Email:</span><span>{this.state.email}</span></p>
                <p><span className="span-style">Address:</span>{this.state.address}</p>
                <p><span className="span-style">Postnummer:</span>{this.state.postCode}</p>
                <p><span className="span-style">Postord:</span>{this.state.postArea}</p>
            </div>
        );
    }
}

export default Userdata;