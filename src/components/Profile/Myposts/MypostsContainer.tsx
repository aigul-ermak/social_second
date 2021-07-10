import React from 'react';
import {addPostAC, updateNewPostAC} from '../../../redux/profileReducer';
import Myposts from './Myposts';

import store, {AppStateType, StoreType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {PostType} from '../../../types/types';

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let MapStateToPropsType = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let MapDispatchToPropsType = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostAC(text));
        }
    }

}
const MyPostsContainer = connect(MapStateToPropsType, MapDispatchToPropsType)(Myposts);

export default MyPostsContainer;








