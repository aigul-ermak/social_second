import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: any) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Valera" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Viktor" id="4"/>
                <DialogItem name="Katya" id="5"/>
                <DialogItem name="Ignat" id="6"/>
            </div>

            <div className={s.message}>
                <Message message="How are you?"/>
                <Message message="What do you do?"/>
                <Message message="How come?"/>

            </div>

        </div>
    )
}


export default Dialogs;
