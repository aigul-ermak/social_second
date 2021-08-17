// import React from 'react';
// import axios from 'axios';
// import {UserType} from '../../types/types';
// import Users from './Users';
//
// type UsersAPIPropsType = {
//     users: Array<UserType>
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: Array<UserType>) => void
//     setCurrentPage: (pageNumber: number) => void
//     setTotalUsersCount: (totalUsersCount: number) => void
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
// }
//
// class UsersAPIComponent extends React.Component<UsersAPIPropsType> {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => {
//             this.props.setUsers(response.data.items)
//                 this.props.setTotalUsersCount(response.data.totalCount)
//
//         });
//     }
//     onPageChanged = (pageNumber: number) => {
//         this.props.setCurrentPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items)
//             })
//     }
//
//     render(){
//        return <Users
//             totalUsersCount={this.props.totalUsersCount}
//             pageSize={this.props.pageSize}
//             currentPage={this.props.currentPage}
//             onPageChanged={this.onPageChanged}
//             users={this.props.users}
//             follow={this.props.follow}
//             unfollow={this.props.unfollow}
//         />
//     }
// }
// export default UsersAPIComponent;
