import React, {ChangeEvent} from 'react';
import s from './users.module.css'
import {UserType} from '../../types/types';



type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void

}

let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers (
            [
                {
                    id: 1,
                    photoUrl: 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 1,
                    photoUrl: 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg',
                    followed: false,
                    fullName: 'Dima',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 1,
                    photoUrl: 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg',
                    followed: true,
                    fullName: 'Olya',
                    status: 'I am not boss',
                    location: {city: 'Moscow', country: 'Russia'}
                }
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                       <div>
                           <img src={u.photoUrl} className={s.usersPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={ () => {
                                   props.unfollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={ () => {
                                   props.follow(u.id)
                               }}>Follow</button>
                           }
                       </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                </span>
                <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;
