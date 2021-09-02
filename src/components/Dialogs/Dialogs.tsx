import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType, DialogType, MessageType} from '../../types/types';
import { Redirect } from 'react-router-dom';


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    onMessageOnChange: (text: string) => void
    newMessageText: string
    isAuth: boolean
}
const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    const messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} key={message.id} id={message.id}/>);

    let addMessage = () => {
        props.addMessage();
    }
    const onMessageOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.onMessageOnChange(text);
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea value={props.dialogsPage.newMessageText}
                              onChange={onMessageOnChange}
                              placeholder="Enter your message"/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>

        </div>
    )
}


export default Dialogs;
