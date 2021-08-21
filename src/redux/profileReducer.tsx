import {PostType, ProfileType} from '../types/types';
import {ActionType, AddNewPostAT, AddPostAT, setUserProfileAT} from '../types/dispatchTypes';

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'go home', likesCount: 1},
        {id: 2, message: 'go to school', likesCount: 2},
        {id: 3, message: 'go to work', likesCount: 33},
    ] as Array<PostType>,
    newPostText: 'it-kamasutra.com',
    profile: null

}
export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
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
        default:
            return state;
    }
}
export const addPostAC = (): AddPostAT => ({type: ADD_POST})
export const updateNewPostAC = (text: string): AddNewPostAT => ({type: ADD_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: ProfileType): setUserProfileAT => ({type: SET_USER_PROFILE, profile}) as const

export default profileReducer;

