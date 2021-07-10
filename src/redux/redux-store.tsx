import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';


let reducer = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
    }
);


export type StoreType = typeof store;
// export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof reducer>

let store = createStore(reducer);

export default store;
