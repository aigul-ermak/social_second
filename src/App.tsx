import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionType, StoreType} from './redux/state';

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Navbar friend={state.sidebar}/>*/}

                <div className="app-wrapper-content">
                    <Route path="/profile/" render={() =>
                        <Profile
                            profilePage={state.profilePage}
                            dispatch={props.dispatch.bind(props.store)}

                        />}/>
                    <Route path="/messages/" render={() =>
                        <Dialogs
                            dialogsPage={state.dialogsPage}
                            dispatch={props.dispatch.bind(props.store)}
                        />}/>
                    <Route path="/news/" render={() => <News/>}/>
                    <Route path="/music/" render={() => <Music/>}/>
                    <Route path="/settings/" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
