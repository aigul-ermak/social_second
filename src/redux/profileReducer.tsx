import {PostType, ProfileType} from '../types/types';
import {ActionType, AddNewPostAT, AddPostAT, setUserProfileAT, setUserStatusAT} from '../types/dispatchTypes';
import {profileAPI} from '../api/Api';
import {toggleFollowingProgress} from './usersReduser';

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'go home', likesCount: 1},
        {id: 2, message: 'go to school', likesCount: 2},
        {id: 3, message: 'go to work', likesCount: 33},
    ] as Array<PostType>,
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""

}
export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
    status: string
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,//id: newDate(), getTime(),
                message: state.newPostText, // postText
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case ADD_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export const addPostAC = (): AddPostAT => ({type: ADD_POST})
export const updateNewPostAC = (text: string): AddNewPostAT => ({type: ADD_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: ProfileType): setUserProfileAT => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string): setUserStatusAT => ({type: SET_STATUS, status}) as const

export const getUserProfile = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}
export const getStatus = (userId: string) =>  {
   return (dispatch: any) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}
export const updateStatus = (status: string) =>  {
   return (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}


export default profileReducer;

