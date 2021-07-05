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
import {ActionType, StateType} from './redux/store';
import store from './redux/redux-store';

type AppPropsType = {
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Navbar friend={state.sidebar}/>*/}

                <div className="app-wrapper-content">
                    <Route path="/profile/" render={() =>
                        <Profile
                            profilePage={store.getState().profilePage}
                            dispatch={props.dispatch.bind(store)}

                        />}/>
                    <Route path="/messages/" render={() =>
                        <Dialogs
                            dialogsPage={store.getState().dialogsPage}
                            dispatch={props.dispatch.bind(store)}
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
