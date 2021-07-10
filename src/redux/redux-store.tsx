import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';


export const rootReducer = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
    }
);

// export type RootStateType = ReturnType<typeof reducers>
export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export default store;
