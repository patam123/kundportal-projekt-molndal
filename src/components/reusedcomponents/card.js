import React from 'react';
import Header from './header';
import CardSection from './cardsection';

const Card= ({headText,btnText,handleBtnClick, firstSection})=> {
   
        return (
            <div>             
                <Header headText={headText} btnText={btnText} handleBtnClick={handleBtnClick} />
                <CardSection content={firstSection} />
               
            </div>
        
        )
}

export default Card;