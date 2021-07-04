import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';
import {ActionType, DialogsPageType, MessageType} from '../../../redux/state';

export type messagePropsType = {
    id: number
    message: string
    // addMessage: () => void
    // updateNewMessageText: (newMessageText: string) => void
    // newMessageText: string


}

const Message = (props: messagePropsType) => {

    return (
        <div>
            <div className={s.message}>
                {props.message}
            </div>

        </div>
    )
}


export default Message;


// newMessageElement.current.value = '';//занулим строку после добавления сообщения



