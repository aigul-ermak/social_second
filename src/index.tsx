import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, {StateType} from './redux/state';


export let rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                dispatch={store.dispatch.bind(store)}
                // addMessage={store.addMessage.bind(store)}
                // updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


store.subscribe(rerenderEntireTree);
rerenderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
