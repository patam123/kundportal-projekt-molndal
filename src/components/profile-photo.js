import React, {Component} from 'react';

class Photo extends Component{



    render(){
        return(
            <div>
                <img className="profile-picture" src={this.props.user.pic} alt="profilbild"></img>
            </div>
        )
    }
}

export default Photo;