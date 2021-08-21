import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../types/types';
import Preloader from '../../Common/Preloader/Preloader';

type ProfileInfoPropsType = {
    profile: null | ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://www.adobe.com/express/feature/image/media_1c2de37424332b3b9332a4d78c24ecfd151071408.png?width=2000&format=webply&optimize=medium"/>
            </div>

            <div className={s.descriptionBlock}>
                ava + description
            </div>

            <div>
                <img src={props.profile.photos.small}/>
            </div>
        </div>
    )
}


export default ProfileInfo;
