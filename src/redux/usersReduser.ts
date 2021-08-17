import {UserType} from '../types/types';
import {
    ActionType,
    FollowUserAT,
    SetCurrentPageAT,
    SetTotalUsersCountAT,
    SetUsersAT,
    UnfollowUserAT
} from '../types/dispatchTypes';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1

}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
        default:
            return state;
    }
};


export const followAC = (userId: number): FollowUserAT => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number): UnfollowUserAT => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users}) as const
export const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountAT => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}) as const

export default UsersReducer;



