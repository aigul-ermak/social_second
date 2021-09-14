import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../types/types';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (values: any) => void
    isAuth: boolean
}
const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    const messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} key={message.id} id={message.id}/>);

    if (!props.isAuth) return <Redirect to={'/login'}/>

    let addMessage = (values: any) => {
        props.addMessage(values.addMessage);
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
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>

        </div>
    )
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'addMessage'}
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;
