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

    let dialogs  = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Katya'},
        {id: 5, name: 'Sveta'}
    ]
    const dialogsElements = dialogs
        .map (dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messages = [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'What do you do?'},
        {id: 3, message: 'How come?'},
        {id: 4, message: 'Where you go?'}
    ]

    let messagesElements = messages
        .map (message => <Message message={message.message} id={message.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                {messagesElements}
            </div>

        </div>
    )
}


export default Dialogs;
