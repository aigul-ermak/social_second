import React from 'react';
import s from './Profile.module.css'
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType, updateNewPostText} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void

}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <Myposts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;
