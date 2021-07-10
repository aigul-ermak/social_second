import React from 'react';
import {addMessageAC, InitialStateType, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import store, {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

type MapStateToPropsType = {
    dialogsPage: InitialStateType
    newMessageText: string
}
type MapDispatchToPropsType = {
    addMessage: () => void
    onMessageOnChange: (text: string) => void
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
     return {
         dialogsPage: state.dialogsPage,
         newMessageText: state.dialogsPage.newMessageText
     }
 }
 let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
     return {
         addMessage: () => {
             dispatch(addMessageAC());
         },
         onMessageOnChange: (text: string) => {
             dispatch(updateNewMessageTextAC(text));
         }
     }
 }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;



















//
//
//
// type DialogsContainerType = {
//     store: StoreType
// }
// const DialogsContainer = (props: DialogsContainerType) => {
//
//     let addMessage = () => {
//         store.dispatch(addMessageAC());
//     }
//     const onMessageOnChange = (text: string) => {
//         store.dispatch(updateNewMessageTextAC(text));
//     }
//
//     return (
//         <Dialogs
//             addMessage={addMessage}
//             onMessageOnChange={onMessageOnChange}
//             dialogsPage={store.getState().dialogsPage}
//             // DialogItem={store.getState().dialogsPage.dialogs}
//             // Message={store.getState().dialogsPage.messages}
//             newMessageText={store.getState().dialogsPage.newMessageText}
//         />
//     )
// }
