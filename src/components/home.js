import React from 'react';
import Header from './header';
import Section from './section.js' 

// Home station var min profil och mitt innehav ska anropas här
class Home extends React.Component
{
    //konstruktorn behövs kanske inte?
    constructor(title)
    {   super();
        this.title=title;
    }
       
    render()
    {             
        return (            
            <div>
            <Header headText={this.props.title} btnText="tryck på mig" />
            </div>
        )
    }
    
    
}

export default Home;

