import {UserType} from '../types/types';
import {ActionType, FollowUserAT, SetUsersAT, UnfollowUserAT} from '../types/dispatchTypes';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState: InitialStateType = {
    users: []
    //     {
    //         id: 1,
    //         photoUrl: 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg',
    //         followed: false,
    //         fullName: 'Andrew',
    //         status: 'I am a boss',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 1,
    //         photoUrl: 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg',
    //         followed: false,
    //         fullName: 'Dima',
    //         status: 'I am a boss too',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    //     {
    //         id: 1,
    //         photoUrl: 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg',
    //         followed: true,
    //         fullName: 'Olya',
    //         status: 'I am not boss',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     }
    // ]
}
export type InitialStateType = {
    users: Array<UserType>
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
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};


export const followAC = (userId: number): FollowUserAT => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number): UnfollowUserAT => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users}) as const

export default UsersReducer;



