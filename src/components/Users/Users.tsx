import React, {ChangeEvent} from 'react';
import s from './users.module.css'
import {UserType} from '../../types/types';
import axios from 'axios';
import userPhoto from'./../../assets/images/userPhoto.png'


type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void}

let Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                       <div>
                           <img src={u.photos.small !== null
                           ? u.photos.small
                           : userPhoto} className={s.usersPhoto}/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                </span>
                <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;
