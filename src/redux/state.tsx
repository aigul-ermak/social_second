import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

export type FriendType = {
    id: number
    name: string
}
type SideBarType = {
    friend: Array<FriendType>
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SideBarType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

// type AddPostActionType = ReturnType<typeof addPostActionCreator>
// type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
// type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
// type  UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>

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
// const ADD_POST = 'ADD-POST';
// const ADD_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const ADD_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store: StoreType = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'go home', likesCount: 1},
                {id: 2, message: 'go to school', likesCount: 2},
                {id: 3, message: 'go to work', likesCount: 33},
            ],
            newPostText: 'it-kamasutra.com'
        },
        sidebar: {
            friend: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Sam'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber();
    }
}

export default store;
// export const addPostAC = (): AddPostAT => ({type: ADD_POST})
// export const updateNewPostAC = (text: string): AddNewPostAT => ({type: ADD_NEW_POST_TEXT, newText: text})
// export const addMessageAC = (): AddMessageAT => ({type:ADD_MESSAGE})
// export const updateNewMessageTextAC = (text: string):AddNewMessageAT => ({type:ADD_NEW_MESSAGE_TEXT, newMessageText: text})




//  export const addPostActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     } as const
// }
//
//  export const updateNewPostTextActionCreator = (text: string) => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: text
//     } as const
// }
//
// export const addMessageActionCreator = () => {
//     return {
//         type: 'ADD-MESSAGE'
//     } as const
// }
//
// export const updateNewMessageTextActionCreator = (text: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text
//     } as const
// }



// if (action.type === 'ADD-POST') {
//     let newPost: PostType = {
//         id: 5,//id: newDate(), getTime(),
//         message: this._state.profilePage.newPostText, // postText
//         likesCount: 0
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber()
// } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//     this._state.profilePage.newPostText = action.newText;
//     this._callSubscriber()
// } else if (action.type === 'ADD-MESSAGE') {
//     let newMessage: MessageType = {
//         id: 6,
//         message: this._state.dialogsPage.newMessageText
//     };
//     this._state.dialogsPage.messages.push(newMessage)
//     this._state.dialogsPage.newMessageText = '';
//     this._callSubscriber()
// } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
//     this._state.dialogsPage.newMessageText = action.newMessageText;
//     this._callSubscriber()
// }
