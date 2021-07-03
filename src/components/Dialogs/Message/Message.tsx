import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

export type messagePropsType = {
    id: number
    message: string
    addMessage: (textMessage: string) => void
}

const Message = (props: messagePropsType) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>();//step 1

    let addMessage = () => {

        if (newMessageElement.current) {
            props.addMessage(newMessageElement.current.value)
        }
        // let newMessage = newMessageElement.current?.value;
    };
    return (
        <div>
            <div className={s.message}>
                {props.message}
            </div>
            <div>
                <textarea ref={newMessageElement}/>
                {/*//step2*/}
                <button onClick={addMessage}>Add message</button>
                {/*step3*/}
            </div>
        </div>
    )
}


export default Message;
