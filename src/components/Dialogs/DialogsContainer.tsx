import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {DialogsPageType, DialogType} from '../../types/types';


// type MapStateToPropsType = {
//     dialogsPage: Array<DialogType>
//     newMessageText: string
// }

type MapDispatchToPropsType = {
    addMessage: () => void
    onMessageOnChange: (text: string) => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage,
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

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


// const DialogsContainer = (props: DialogsContainerType) => {
//
//     return (
//         <StoreContext.Consumer>
//             { store => {
//                 let addMessage = () => {
//                     store.dispatch(addMessageAC());
//                 }
//                 const onMessageOnChange = (text: string) => {
//                     store.dispatch(updateNewMessageTextAC(text));
//                 }
//                 return (
//                     <Dialogs
//                         addMessage={addMessage}
//                         onMessageOnChange={onMessageOnChange}
//                         dialogsPage={store.getState().dialogsPage}
//                         // DialogItem={store.getState().dialogsPage.dialogs}
//                         // Message={store.getState().dialogsPage.messages}
//                         newMessageText={store.getState().dialogsPage.newMessageText}
//                     />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }
