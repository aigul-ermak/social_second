import {rerenderEntireTree} from '../render';

export type FriendType = {
    id: number
    name: string
}
type SideBarType = {
    friend: Array<FriendType>
}
type PostType = {
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
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SideBarType
}

let state: StateType = {
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
        ]
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
}

export let addPost = () => {
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''; //зануляем строку, убрали из Addpost пропс UpdatedNewPostText = '';
    rerenderEntireTree(state)
}

export let addMessage = (textMessage: string) => {

    let newMessage: MessageType= {
        id: 6,
        message: textMessage
    };
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;
