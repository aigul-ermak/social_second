import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {UserType} from '../../types/types';
import {followAC, InitialStateType, setUsersAC, unfollowAC} from '../../redux/usersReduser';

type MapStateToPropsType = {
    // usersPage: InitialStateType
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array <UserType>) => void

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
