import React, {ChangeEvent} from 'react';
import s from './Myposts.module.css'
import Post, {PostPropsType} from './Post/Post';


type MypostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: MypostsPropsType) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>;

                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>

                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;
