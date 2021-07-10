import {ActionType, AddMessageAT, AddNewMessageAT} from '../types/dispatchTypes';
import {MessageType} from '../types/types';


const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Katya'}
    ],
    messages: [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'What do you do?'},
        {id: 3, message: 'How come?'},
        {id: 4, message: 'Where you go?'}
    ],
    newMessageText: ''
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {id: 6, message: state.newMessageText}
            stateCopy = {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };
            return stateCopy;
        case ADD_NEW_MESSAGE_TEXT:
            stateCopy = {
                ...state,
                newMessageText: action.newMessageText
            };
            return stateCopy;
        default:
            return state;
    }
}


export const addMessageAC = (): AddMessageAT => ({type: ADD_MESSAGE})
export const updateNewMessageTextAC = (text: string): AddNewMessageAT => ({
    type: ADD_NEW_MESSAGE_TEXT,
    newMessageText: text
})

export default dialogsReducer;
