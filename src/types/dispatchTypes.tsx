export type AddPostAT = {
    type: 'ADD-POST'
}
export type AddNewPostAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type AddMessageAT = {
    type: 'ADD-MESSAGE'
}
export type AddNewMessageAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type ActionType = AddPostAT | AddNewPostAT | AddMessageAT | AddNewMessageAT
