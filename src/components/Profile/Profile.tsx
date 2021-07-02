import React from 'react';
import s from './Profile.module.css'
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void

}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <Myposts
            posts={props.profilePage.posts}
            addPost={props.addPost}/>
    </div>
}

export default Profile;
