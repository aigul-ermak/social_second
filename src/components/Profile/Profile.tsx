import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/redux-store';
import MyPostsContainer from './Myposts/MypostsContainer';

type ProfilePropsType = {
    store: StoreType

}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}

export default Profile;
