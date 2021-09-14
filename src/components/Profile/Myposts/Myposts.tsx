import React from 'react';
import s from './Myposts.module.css'
import Post, {PostPropsType} from './Post/Post';
import {reduxForm, Field} from 'redux-form';


type MypostsPropsType = {
    posts: Array<PostPropsType>
    // newPostText: string
    // updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
}

const Myposts = (props: MypostsPropsType) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount} id={post.id}/>);

    let addNewPost = (values: any) => {
        props.addPost(values.newText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};

const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newText'}
                       component={'textarea'}
                       placeholder={'text your post'}
                />;
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostForm)

export default Myposts;
