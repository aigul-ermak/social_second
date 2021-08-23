import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {setUserProfile} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {ProfileType} from '../../types/types';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps} from 'react-router/ts4.0';
import { withRouter } from 'react-router-dom';

type ProfileContainerPropsType = RouteComponentProps<{userId?: string}> &  {
    setUserProfile: (data: ProfileType) => void
    profile: ProfileType | null
}

type MapStateToPropsType = {
    profile: ProfileType | null
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
