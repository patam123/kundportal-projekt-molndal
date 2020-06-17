import React from 'react';

const Photo = ({picture}) => {
    return(
        <div>
            <img className="profile-picture" src={`${picture}`} alt="profilbild"></img>
        </div>
    )
}


export default Photo;