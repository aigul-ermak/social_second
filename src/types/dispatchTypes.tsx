import {AuthUserDataType, ProfileType, UserType} from './types';

export type AddPostAT = {
    type: 'ADD-POST'
}
export type AddNewPostAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type AddMessageAT = {
    type: 'ADD-MESSAGE'
}
export type AddNewMessageAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}

export type FollowUserAT = {
    type: 'FOLLOW'
    userId: number
}

export type UnfollowUserAT = {
    type: 'UNFOLLOW'
    userId: number
}

export type SetUsersAT = {
    type: 'SET_USERS'
    users: Array<UserType>
}

export type SetCurrentPageAT = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

export type SetTotalUsersCountAT = {
    type: 'SET_TOTAL_USERS_COUNT'
    count: number
}

export type ToggleIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}

export type setUserProfileAT = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}

export type setAuthUserDataAT = {
    type: 'SET_USER_DATA'
    data: AuthUserDataType
}

export type toggleIsFollowingInProgressAT = {
    type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'
    isFetching: boolean
    userId: number
}

export type setUserStatusAT = {
    type : 'SET_STATUS'
   status: string
}

export type ActionType = AddPostAT | AddNewPostAT | AddMessageAT
    | AddNewMessageAT | FollowUserAT | UnfollowUserAT | SetUsersAT
    | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT
|setUserProfileAT | setAuthUserDataAT | toggleIsFollowingInProgressAT
| setUserStatusAT


