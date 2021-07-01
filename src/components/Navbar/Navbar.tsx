import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import {FriendType} from '../../redux/state';
import SideBar from './sidebar/sidebar';

type NavbarPropsType = {
    friend: Array<FriendType>
}

const Navbar = (props: NavbarPropsType) => {
    let friendElements = props.friend
        .map(f => <SideBar id={f.id} name={f.name}/>)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div>
                <div className={s.sidebar}>
                    <h3>Sidebar</h3>
                </div>
                <div>
                    {friendElements}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
