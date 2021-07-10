import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import DialogsContainer from './components/Dialogs/DialogsContainer';


type AppPropsType = {

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
                        <Profile />}/>
                    <Route path="/messages/" render={() =>
                        <DialogsContainer />}/>

                    <Route path="/news/" render={() => <News/>}/>
                    <Route path="/music/" render={() => <Music/>}/>
                    <Route path="/settings/" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
