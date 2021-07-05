import {ActionType, AddMessageAT, AddNewMessageAT, MessageType} from './state';

const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state: any, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: 6,
                message: state.newMessageText
            };
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state;
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
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
