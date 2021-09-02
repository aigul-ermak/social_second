import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {getUserProfile, setUserProfile} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {ProfileType} from '../../types/types';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps} from 'react-router/ts4.0';
import {Redirect, withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/Api';
import Dialogs from '../Dialogs/Dialogs';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';

type ProfileContainerPropsType = RouteComponentProps<{userId?: string}> &  {
    // setUserProfile: (data: ProfileType) => void
    profile: ProfileType | null
    getUserProfile: (userId: string) => void
    isAuth: boolean
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2'
        }
       this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default compose <React.ComponentType> (
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect
) (ProfileContainer);


