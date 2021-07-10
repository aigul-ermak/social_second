import {PostType, ProfilePageType} from '../types/types';
import {ActionType, AddNewPostAT, AddPostAT} from '../types/dispatchTypes';

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'go home', likesCount: 1},
        {id: 2, message: 'go to school', likesCount: 2},
        {id: 3, message: 'go to work', likesCount: 33},
    ],
    newPostText: 'it-kamasutra.com'
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,//id: newDate(), getTime(),
                message: state.newPostText, // postText
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case ADD_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostAC = (): AddPostAT => ({type: ADD_POST})
export const updateNewPostAC = (text: string): AddNewPostAT => ({type: ADD_NEW_POST_TEXT, newText: text})

export default profileReducer;

