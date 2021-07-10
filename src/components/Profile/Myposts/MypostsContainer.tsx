import React from 'react';
import {addPostAC, updateNewPostAC} from '../../../redux/profileReducer';
import {AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import MyPosts from './Myposts';
import {PostType} from '../../../types/types';

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}

// export type MyPostsContainerType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostAC(text));
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
