import React, {Component} from 'react';
import User from "./user";
import Share from "./share";
class Possession extends Component
{
    render (){
        
        const share1 = new Share("Patrick ","Finans" ,1,"B",100,"00001-111",1+"%",1+"%")
        const share2 = new Share("Volvo","Finans", 30000, "A", 150, "0000-0000", 1 +"%", 1 +"%")       
        const shares = [share1, share2];
       
        let sum = shares.reduce(((tot, share) => tot + share.amountPos),0);
        const date= new Date();
    
            
        return(
            <div>
            <div>{sum}</div> 
            <div>{`Uppdaterad: ${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`}</div>
            <div>{shares.map((element)=>(<li>{element.industry}</li>))}</div>          
            </div>
        )
    }
}

export default Possession;
