import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MypostsContainer';
import {ProfileType} from '../../types/types';


type ProfilePropsType = {
    profile: ProfileType | null
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    status: string

}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     getStatus={props.getStatus}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;
