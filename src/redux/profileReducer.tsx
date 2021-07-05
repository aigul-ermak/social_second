import {ActionType, AddNewPostAT, AddPostAT, PostType} from './state';

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: any, action: ActionType) => {
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

