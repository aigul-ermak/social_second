import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import store, {StoreType} from '../../redux/redux-store';
import Dialogs from './Dialogs';

type DialogsContainerType = {
    store: StoreType
   }
const DialogsContainer = (props: DialogsContainerType) => {

    let addMessage = () => {
        store.dispatch(addMessageAC());
    }
    const onMessageOnChange = (text: string) => {
        store.dispatch(updateNewMessageTextAC(text));
    }

    return (
        <Dialogs
            addMessage={addMessage}
            onMessageOnChange={onMessageOnChange}
            dialogsPage={store.getState().dialogsPage}
            DialogItem={store.getState().dialogsPage.dialogs}
            Message={store.getState().dialogsPage.messages}
            newMessageText={store.getState().dialogsPage.newMessageText}
        />
    )
}


export default DialogsContainer;
