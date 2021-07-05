import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {ActionType, DialogsPageType} from '../../redux/store';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}
const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} id={message.id}
        />);
    let addMessage = () => {
        props.dispatch(addMessageAC());
    }
    const onMessageOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch(updateNewMessageTextAC(text));
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
                    <textarea value={props.dialogsPage.newMessageText} onChange={onMessageOnChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>

        </div>
    )
}


export default Dialogs;
