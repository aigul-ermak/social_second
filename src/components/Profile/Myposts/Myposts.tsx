import React from 'react';
import s from './Myposts.module.css'
import Post from './Post/Post';



const Myposts = () => {

    let posts = [
        {id: 1, message: 'go home', likesCount: 1},
        {id: 2, message: 'go to school', likesCount: 2},
        {id: 3, message: 'go to work', likesCount: 33},
    ]

    let postElements = posts
        .map ( post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>


            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default Myposts;
