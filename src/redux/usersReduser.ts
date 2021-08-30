import {UserType} from '../types/types';
import {
    ActionType,
    FollowUserAT,
    SetCurrentPageAT,
    SetTotalUsersCountAT,
    SetUsersAT, ToggleIsFetchingAT, toggleIsFollowingInProgressAT,
    UnfollowUserAT
} from '../types/dispatchTypes';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const UsersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
    }
default:
    return state;
}
};


export const follow = (userId: number): FollowUserAT => ({type: FOLLOW, userId}) as const
export const unfollow = (userId: number): UnfollowUserAT => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number): SetCurrentPageAT => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountAT => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
}) as const
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAT => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingInProgressAT => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId}) as const

export default UsersReducer;



