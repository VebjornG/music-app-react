import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateContext from "./context/stateprovider"
import reducer, { initialState } from "./reducer/reducer"

ReactDOM.render(
    <StateContext initialState={initialState} reducer={reducer}>
        <App />
    </StateContext>, 
    document.getElementById('root'));
