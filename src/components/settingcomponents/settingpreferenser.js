import React from 'react';
import Input from '../reusedcomponents/input.js';
import Button from '../reusedcomponents/button';

function settingPreferenser() {
    return (
        <div>
        <Input inputtype="checkbox" inputName="Peter" inputvalue="Peter" labelname="industry1"/>
        <Input inputtype="checkbox" inputName="Peter" inputvalue="Peter" labelname="industry1"/>
        <Input inputtype="checkbox" inputName="Peter" inputvalue="Peter" labelname="industry1"/>
        <Input inputtype="checkbox" inputName="Peter" inputvalue="Peter" labelname="industry1"/>
        <p>Tips! ifall du väljer integerera din bank så kan vi anpassa  dina investeringar utefter din ekonomi och preferenser</p>
        <span></span><p>Integerera din bank!<span>Detta kommer att skicka dig vidare.</span></p>  
        <Button btnText="Spara"/>  
        </div>
    );
    
}

export default settingPreferenser;