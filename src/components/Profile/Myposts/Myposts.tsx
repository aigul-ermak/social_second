import React from 'react';
import s from './Myposts.module.css'
import Post, {PostPropsType} from './Post/Post';
import {ActionType, ChangeNewTextActionType} from '../../../redux/state';

type MypostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionType) => void
}

const Myposts = (props: MypostsPropsType) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();//шаг1 -создаем специальную переменную - ссылку на элемент

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value;
        if(text){
            let action: ChangeNewTextActionType  = {type:'UPDATE-NEW-POST-TEXT', newText: text}
            props.dispatch(action)
        }

        // if (newPostElement.current) {
        //     props.updateNewPostText(newPostElement.current.value)
        // }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>;

                </div>
                <div>
                    <button onClick={addPost}>Add post</button>

                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default Myposts;
