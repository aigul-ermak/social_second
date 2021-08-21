import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {setUserProfile} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {ProfileType} from '../../types/types';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps} from 'react-router/ts4.0';

type ProfileContainerPropsType =  {
    setUserProfile: (data: ProfileType) => void
    profile: ProfileType | null
}

type MapStateToPropsType = {
    profile: ProfileType | null
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
