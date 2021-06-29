import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div className={s.content}>
            <img
                src="https://www.adobe.com/express/feature/image/media_1c2de37424332b3b9332a4d78c24ecfd151071408.png?width=2000&format=webply&optimize=medium"/>
            <div className={s.descriptionBlock}>
                ava + description
            </div>


        </div>
    </div>
}

export default ProfileInfo;
