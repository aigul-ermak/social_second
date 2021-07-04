import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

export type messagePropsType = {
    id: number
    message: string
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
    newMessageText: string
}

const Message = (props: messagePropsType) => {
    // let newMessageElement = React.createRef<HTMLTextAreaElement>();//step 1

    let addMessage = () => {
        props.addMessage()
    }
    const onMessageOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
               props.updateNewMessageText(event.currentTarget.value)
    }

    return (
        <div>
            <div className={s.message}>
                {props.message}
            </div>
            <div>
                <textarea value={props.newMessageText} onChange={onMessageOnChange} />
                <button onClick={addMessage}>Add message</button>
                {/*step3*/}
            </div>
        </div>
    )
}


export default Message;


// newMessageElement.current.value = '';//занулим строку после добавления сообщения



