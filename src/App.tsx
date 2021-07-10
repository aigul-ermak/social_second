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
import {StoreType} from './redux/redux-store';
import {ActionType} from './types/dispatchTypes';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MyPostsContainer from './components/Profile/Myposts/MypostsContainer';
import {ProfilePageType} from './types/types';

type AppPropsType = {
    store: StoreType
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
                        <Profile store={props.store}/>}/>
                    <Route path="/messages/" render={() =>
                        <DialogsContainer store={props.store}/>}/>

                    <Route path="/news/" render={() => <News/>}/>
                    <Route path="/music/" render={() => <Music/>}/>
                    <Route path="/settings/" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
