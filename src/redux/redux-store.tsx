import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';


let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
    }
);

export type RootStateType = ReturnType<typeof reducers>
export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof store.getState>

let store = createStore(reducers);

export default store;
