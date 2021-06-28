import React from 'react';
import s from './Profile.module.css'
import Myposts from './Myposts/Myposts';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src="https://www.adobe.com/express/feature/image/media_1c2de37424332b3b9332a4d78c24ecfd151071408.png?width=2000&format=webply&optimize=medium"/>
            <div>
                ava + description
            </div>

            <Myposts />

        </div>
    </div>
}

export default Profile;
