import React from 'react';
import Profile from './Profile';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {ProfileType} from '../../types/types';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps} from 'react-router/ts4.0';
import {Redirect, withRouter} from 'react-router-dom';
import {compose} from 'redux';

type ProfileContainerPropsType = RouteComponentProps<{ userId?: string }> & {
    // setUserProfile: (data: ProfileType) => void
    profile: ProfileType | null
    getUserProfile: (userId: string) => void
    isAuth: boolean
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    status: string

}

type MapStateToPropsType = {
    profile: ProfileType | null
    // isAuth: boolean
    status: string
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);


