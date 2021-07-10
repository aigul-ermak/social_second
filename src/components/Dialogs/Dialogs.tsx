import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType, DialogType, MessageType} from '../../types/types';


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    onMessageOnChange: (text: string) => void
    // DialogItem: Array<DialogType>
    // Message: Array<MessageType>
    newMessageText: string
}
const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} id={message.id}/>);

    let addMessage = () => {
        props.addMessage();
    }
    const onMessageOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.onMessageOnChange(text);
    }

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
