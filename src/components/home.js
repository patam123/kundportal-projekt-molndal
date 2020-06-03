import React from 'react';
import Header from './header';
import Section from './section.js' 

// Home station var min profil och mitt innehav ska anropas här
class Home extends React.Component
{
    constructor(title)
    {   super();
        this.title=title;
    }
       
    render()
    {             
        return (            
            <div>
            {Header(this.props.title)}
            </div>
        )
    }
    
    
}

export default Home;

//<header text={this.props.title}/>