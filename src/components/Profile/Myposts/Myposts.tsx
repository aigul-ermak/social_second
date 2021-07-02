import React from 'react';
import s from './Myposts.module.css'
import Post, {PostPropsType} from './Post/Post';

type MypostsPropsType = {
    posts: Array<PostPropsType>
}

const Myposts = (props: MypostsPropsType) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();//шаг1 -создаем специальную переменную - ссылку на элемент

    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    } //шаг4 - функция к которой мы можем обратиться к этой ссылке, далее к свойству current и у него берем value
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>;
                    {/*шаг2 -  тут вызываем эту ссылку которая заработает если нажмут на шаг 3*/}
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    {/*шаг3 при нажатии на кнопку запускается функция*/}
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default Myposts;
