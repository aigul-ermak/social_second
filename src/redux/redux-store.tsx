import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import UsersReducer from './usersReduser';


let reducer = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer
    }
);


export type StoreType = typeof store;
// export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof reducer>

let store = createStore(reducer);

export default store;
