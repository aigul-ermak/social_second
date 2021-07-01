import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

export type messagePropsType = {
    id: number
    message: string
}

const Message = (props: messagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}


export default Message;
