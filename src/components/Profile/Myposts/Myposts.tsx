import React from 'react';
import s from './Myposts.module.css'
import Post from './Post/Post';

// type postDataType = {
//     // id: number
//     message: string
//     // likesCount: number
// }

const Myposts = () => {

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
                <Post message={'go home'}/>
                <Post message={'go to school'}/>


            </div>
        </div>
    )
};

export default Myposts;
