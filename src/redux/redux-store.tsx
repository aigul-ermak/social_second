import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import UsersReducer from './usersReduser';
import authReducer from './authReducer';
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducer = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
    }
);


export type StoreType = typeof store;
// export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof reducer>

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

// @ts-ignore
window.store = store
