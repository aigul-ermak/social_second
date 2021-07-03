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
import {addMessage, addPost, StateType, updateNewPostText} from './redux/state';

type AppPropsType = {
    state: StateType
    addPost: () => void
    addMessage: (textMessage: string) => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friend={props.state.sidebar.friend}/>

                <div className="app-wrapper-content">
                    <Route path="/profile/" render={ () =>
                        <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        /> }/>
                    <Route path="/messages/" render={ () =>
                        <Dialogs
                            dialogsPage={props.state.dialogsPage}
                            addMessage={props.addMessage}
                        /> }/>
                    <Route path="/news/" render={ () => <News />}/>
                    <Route path="/music/" render={ () => <Music />}/>
                    <Route path="/settings/" render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
