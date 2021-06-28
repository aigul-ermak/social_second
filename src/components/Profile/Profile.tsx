import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src="https://www.adobe.com/express/feature/image/media_1c2de37424332b3b9332a4d78c24ecfd151071408.png?width=2000&format=webply&optimize=medium"/>
            <div>
                ava + description
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Profile;
