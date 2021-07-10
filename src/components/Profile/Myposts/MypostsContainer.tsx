import React from 'react';
import {addPostAC, updateNewPostAC} from '../../../redux/profileReducer';
import Myposts from './Myposts';

import store, {StoreType} from '../../../redux/redux-store';

type MyPostsContainerPropsType = {
     store: StoreType
 }

const MyPostsContainer = (props: MyPostsContainerPropsType) => {


    let addPost = () => {
        store.dispatch(addPostAC());
    }
    let onPostChange = (text: string) => {
        let action = updateNewPostAC(text);
      store.dispatch(updateNewPostAC(text));
    }
    return (
        <Myposts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}/>
    )
}


export default MyPostsContainer;
