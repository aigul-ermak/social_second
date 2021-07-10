import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MypostsContainer';
import {StoreType} from '../../redux/redux-store';
import {ProfilePageType} from '../../types/types';



type ProfilePropsType = {

    store: StoreType

}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} />



    </div>
}

export default Profile;
