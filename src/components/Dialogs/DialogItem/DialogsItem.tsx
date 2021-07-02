import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

export type dialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: dialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
            <img src="https://images.theconversation.com/files/394604/original/file-20210412-23-47nz36.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"/>
            {props.name}
        </NavLink>
    </div>
}

export default DialogItem;
