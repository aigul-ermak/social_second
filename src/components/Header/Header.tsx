import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}


const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <div className={s.headerContainer}>
            <div>
                <img
                    src="https://thumbs.dreamstime.com/b/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg"/>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    </header>
}

export default Header;
