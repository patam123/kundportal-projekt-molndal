import React from 'react';
import ProfileSetting from './profilesetting';
import ChangePassword from './changepassword';
import SettingPreferenser from './settingpreferenser'


const Setting = () => {
    return (

        <div>
                <ProfileSetting/>
                <ChangePassword/>
                <SettingPreferenser/>
             
        </div>
     )
}


export default Setting;