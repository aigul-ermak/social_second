import React from 'react';
import {addPostAC} from '../../../redux/profileReducer';
import Myposts from './Myposts';
import {AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {PostType} from '../../../types/types';

type MapStateToPropsType = {
    posts: Array<PostType>
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

let MapStateToPropsType = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
let MapDispatchToPropsType = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText));
        }
    }

}
const MyPostsContainer = connect(MapStateToPropsType, MapDispatchToPropsType)(Myposts);

export default MyPostsContainer;








