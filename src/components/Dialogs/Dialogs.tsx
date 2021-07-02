import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage:  DialogsPageType
}
const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs
        .map (dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesElements = props.dialogsPage.messages
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
