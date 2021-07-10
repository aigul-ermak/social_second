import React from 'react';

import s from './../Dialogs.module.css';


export type messagePropsType = {
    id: number
    message: string
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






