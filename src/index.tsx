import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'go home', likesCount: 1},
    {id: 2, message: 'go to school', likesCount: 2},
    {id: 3, message: 'go to work', likesCount: 33},
]
let dialogs  = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Katya'}
]
let messages = [
    {id: 1, message: 'How are you?'},
    {id: 2, message: 'What do you do?'},
    {id: 3, message: 'How come?'},
    {id: 4, message: 'Where you go?'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
