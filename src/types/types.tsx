import {stringify} from 'querystring';


type UserLocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}
export type UsersPage = {
    users: Array<UserType>
}
export type FriendType = {
    id: number
    name: string
}
export type SideBarType = {
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
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
