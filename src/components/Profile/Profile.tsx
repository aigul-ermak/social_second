import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MypostsContainer';
import {ProfileType} from '../../types/types';


type ProfilePropsType = {
    profile: ProfileType | null

}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
    </div>
}

export default Profile;
