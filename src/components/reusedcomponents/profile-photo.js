import React from 'react';

const Photo = ({user}) => {
    return(
        <div>
            <img className="profile-picture" src={user.pic} alt="profilbild"></img>
        </div>
    )
}


export default Photo;