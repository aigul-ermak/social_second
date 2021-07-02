import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType

    addMessage: (textMessage: string) => void
}
const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesElements = props.dialogsPage.messages
        .map(message => <Message
            message={message.message} id={message.id}
            addMessage={props.addMessage}/>);

    // let newMessageElement = React.createRef<HTMLTextAreaElement>();//step 1
    //
    // let addMessage = () => {
    //     if (newMessageElement.current) {
    //         props.addMessage(newMessageElement.current.value)
    //     }
    //     // let newMessage = newMessageElement.current?.value;
    // };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                {messagesElements}
            </div>
            {/*<div>*/}
            {/*    <textarea ref={newMessageElement}></textarea>*/}

            {/*    <button onClick={addMessage}>Add message</button>*/}
            {/*    /!*step3*!/*/}
            {/*</div>*/}

                </div>
                )
                }


                export default Dialogs;
