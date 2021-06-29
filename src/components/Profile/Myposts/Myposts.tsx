import React from 'react';
import s from './Myposts.module.css'
import Post from './Post/Post';

const Myposts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?'/>
                <Post message='My first post!'/>
                <Post message='What do you do?'/>
            </div>
        </div>
    )
};

export default Myposts;