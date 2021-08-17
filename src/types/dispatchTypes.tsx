import {UserType} from './types';

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
export type ActionType = AddPostAT | AddNewPostAT | AddMessageAT | AddNewMessageAT
    | FollowUserAT | UnfollowUserAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT


