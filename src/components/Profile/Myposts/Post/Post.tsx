import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkFPcpWklTRhNj1mTf_xWdWaH-lt4GA3rZXJuE2ZNKHyy1ajbATNV4MjvweYVOryv7d0&usqp=CAU"/>
            post 1
            <div>
                <span>like</span>
            </div>


        </div>

    )
};

export default Post;
