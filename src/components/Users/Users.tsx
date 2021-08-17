import React from 'react';
import s from './users.module.css'
import {UserType} from '../../types/types';
import userPhoto from './../../assets/images/userPhoto.png'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: Array<UserType>) => void
    // setCurrentPage: (pageNumber: number) => void
    // setTotalUsersCount: (totalUsersCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}
const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p ? `${s.selectedPage}` : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>
                    {p}</span>
                })}

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
                               ? <button onClick={() => {
                                   props.unfollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={() => {
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
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                </span>
                </span>

                </div>)
            }
        </div>
)}


export default Users;
