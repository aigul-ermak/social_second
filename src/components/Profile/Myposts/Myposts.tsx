import React from 'react';
import s from './Myposts.module.css'
import Post from './Post/Post';

// export type myPostPropsType = {
//     id: number
//     message: string
//     likesCount: number
// }

const Myposts = (props: any) => {
    let postElements =
        props.posts.map ( (p: any)=> <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

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
