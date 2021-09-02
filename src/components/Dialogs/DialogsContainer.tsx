import React from 'react';
import {addMessageAC, InitialStateType, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';

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
         newMessageText: state.dialogsPage.newMessageText,

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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
















