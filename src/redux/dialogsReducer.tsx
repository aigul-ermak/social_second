import {ActionType, AddMessageAT, AddNewMessageAT} from '../types/dispatchTypes';
import {MessageType} from '../types/types';


const ADD_MESSAGE = 'ADD-MESSAGE';

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

}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {id: 6, message: action.newMessageText}
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}


export const addMessageAC = (newMessageText: string): AddMessageAT => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer;
