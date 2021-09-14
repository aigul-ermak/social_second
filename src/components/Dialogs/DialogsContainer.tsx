import React from 'react';
import {addMessageAC, InitialStateType} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {compose, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';

type MapStateToPropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText));
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);














