import React from 'react';
import s from './Myposts.module.css'
import Post, {PostPropsType} from './Post/Post';

type MypostsPropsType = {
    posts: Array<PostPropsType>
}

const Myposts = (props: MypostsPropsType) => {

    let postElements = props.posts
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
