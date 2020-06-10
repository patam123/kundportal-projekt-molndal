import React from 'react';
import Input from '../reusedcomponents/input';
import Button from '../reusedcomponents/button'

const changePassword=()=> {
    return (
        <div>
        <Input inputtype="text" inputName="Peter" inputvalue="Peter" labelname="Nuvarande lösenord"/>
        <Input inputtype="text" inputName="Peter" inputvalue="Peter" labelname="Nytt lösenord"/>
        <Input inputtype="text" inputName="Peter" inputvalue="Peter" labelname="Bekräfta nytt lösenord"/> 
        <Button btnText="Spara"/>

        </div>
    );
}

export default changePassword;