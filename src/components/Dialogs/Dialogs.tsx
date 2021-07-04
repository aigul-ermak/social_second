import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {
    ActionType,
    addMessageActionCreator,
    DialogsPageType,
    MessageType,
    updateNewMessageTextActionCreator
} from '../../redux/state';

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
        props.dispatch(addMessageActionCreator());
    }
    const onMessageOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch(updateNewMessageTextActionCreator(text));
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
                <textarea value={props.dialogsPage.newMessageText} onChange={onMessageOnChange}/>
                <button onClick={addMessage}>Add message</button>
            </div>

        </div>
    )
}


export default Dialogs;
